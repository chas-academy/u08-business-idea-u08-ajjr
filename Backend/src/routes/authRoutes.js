// const express = require("express");
// const bcrypt = require("bcrypt");
// const User = require("../models/user"); // Justera sökvägen baserat på din mappstruktur
// const router = express.Router();

// // Registrera en ny användare
// router.post("/register", async (req, res) => {
//   const { email, password } = req.body;
//   console.log(email);
//   console.log(password);
//   try {
//     let user = await User.findOne({ email });
//     console.log(user);
//     if (user) {
//       return res.status(400).json({ msg: "Användaren finns redan" });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     console.log(hashedPassword);
//     user = new User({
//       username: "aa", //detta behöver ändras så den blir unik, bäst att använda från de inamatade värdet i register.jsx
//       email,
//       password: hashedPassword,
//     });
//     console.log(typeof user);
//     await user
//       .save()
//       .then((result) => {
//         console.log(result);
//       })

//       .catch((error) => {
//         console.log(error);
//       });

//     //   .then((result) => {
//     //     console.log(result);
//     //   })

//     //   .catch((error) => {
//     //     console.log(error);
//     //   }); skööön att ha
//     console.log(user.save());

//     res.status(201).json({ msg: "Användare registrerad" });
//   } catch (err) {
//     res.status(500).json({ msg: "Serverfel" });
//   }
// });

// // Logga in en användare
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ msg: "Användaren finns inte" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: "Ogiltiga uppgifter" });
//     }

//     res.json({ msg: "Du är inloggad" });
//   } catch (err) {
//     res.status(500).json({ msg: "Serverfel" });
//   }
// });

// module.exports = router;

const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const router = express.Router();

router.post("/reset-password", async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ msg: "Användare med angiven e-post finns inte." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ msg: "Lösenordet har återställts." });
  } catch (err) {
    res.status(500).json({ msg: "Serverfel" });
  }
});

// Registrera en ny användare
router.post("/register", async (req, res) => {
  const { email, password, firstName } = req.body; // lagt till firstName
  console.log(email);
  console.log(password);
  try {
    let user = await User.findOne({ email });
    console.log(user);
    if (user) {
      return res.status(400).json({ msg: "Användaren finns redan" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    user = new User({
      username: firstName, // Använder firstName för username
      email,
      password: hashedPassword,
    });
    console.log(typeof user);
    await user
      .save()
      .then((result) => {
        console.log(result);
      })

      .catch((error) => {
        console.log(error);
      });

    res.status(201).json({ msg: "Användare registrerad" });
  } catch (err) {
    res.status(500).json({ msg: "Serverfel" });
  }
});

// // Logga in en användare
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ msg: "Användaren finns inte" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: "Ogiltiga uppgifter" });
//     }

//     res.json({ msg: "Du är inloggad" });
//   } catch (err) {
//     res.status(500).json({ msg: "Serverfel" });
//   }
// });

// module.exports = router;

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Användaren finns inte" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Användarnamn/Lösenord är fel" });
    }

    res.json({ msg: "Du är inloggad" });
  } catch (err) {
    res.status(500).json({ msg: "Serverfel" });
  }
});

router.post("/logout", (req, res) => {
  // Om du använder sessions, skulle du göra något så här:
  // req.session.destroy();
  // Om du använder JWT och sparar det i en cookie:
  res.cookie("token", "", { expires: new Date(0) });
  res.status(200).json({ msg: "Du är utloggad" });
});
module.exports = router;
