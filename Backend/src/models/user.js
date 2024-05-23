
const mongoose = require("mongoose");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/userDB")
// .then(() => console.log("Anslutning till MongoDB lyckades"))
// .catch((err) => {
//   console.error("Anslutning till MongoDB misslyckades: ", err);
//   process.exit(1); // Avsluta processen om anslutningen misslyckades
// });



const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
//   lastLogin: { type: Date },
});

const User = mongoose.model("userDB", userSchema);
module.exports = User;
