const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Importera och konfigurera dotenv

// Skapa en instans av express
const app = express();

// Tillåt alla domäner att göra förfrågningar
app.use(cors());

// Middleware för att hantera JSON-data och urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB-anslutning
mongoose
  .connect("mongodb://localhost:27017/userDB")
  .then(() => console.log("Anslutning till MongoDB lyckades"))
  .catch((err) => {
    console.error("Anslutning till MongoDB misslyckades: ", err);
    process.exit(1); // Avsluta processen om anslutningen misslyckades
  });

// Importera autentiseringsroutes
const authRoutes = require("./src/routes/authRoutes.js");

app.use("/api/auth", authRoutes);

// Enkel endpoint för att testa att servern är igång
app.get("/", (req, res) => {
  res.send("Hello from the Server.js");
});

// Definiera porten och starta servern
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
