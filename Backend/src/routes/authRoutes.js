
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const router = express.Router();
const jwt = require("jsonwebtoken")

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

// Logga in en användare

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

    const token = jwt.sign(
        {
            userEmail: user.email,
            userRole: user.role, // Include the user role in the token
            
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    );

    res.cookie("jwt_token", token, {
        httpOnly:true,
    }).json({ msg: "Du är inloggad", role: user.role });
  } catch (err) {
    res.status(500).json({ msg: "Serverfel" });
  }
});



router.post("/logout", (req, res) => {
    res.cookie("jwt_token", "", { expires: new Date(0) });

    res.status(200).json({ msg: "Du är utloggad" });
});






router.get("/orders", async (req, res) => {
    // Detta är en exempelmetod på orderstruktur
    const orders = [
      {
        id: "123",
        date: new Date(),
        total: 299,
        status: "Levererad",
      },
      {
        id: "456",
        date: new Date(),
        total: 499,
        status: "Under behandling",
      },
    ];
    res.json(orders);
  });


module.exports = router;
