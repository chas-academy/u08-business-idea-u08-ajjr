const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const product = require("./src/models/product.model.js");
const productRoute = require("./src/routes/product.route.js");
require("dotenv").config(); // Importera och konfigurera dotenv
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/ajjrofficial";

// Skapa en instans av express
const app = express();

// Tillåt alla domäner att göra förfrågningar
app.use(cors());

// Middleware för att hantera JSON-data och urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Hämta MongoDB URI och port från miljövariabler
const PORT = process.env.PORT || 3000;

// MongoDB-anslutning
mongoose

  .connect(mongoUri, {
  })
  .then(() => console.log("Anslutning till MongoDB lyckades"))
  .catch((err) => {
    console.error("Anslutning till MongoDB misslyckades: ", err);
    process.exit(1); // Avsluta processen om anslutningen misslyckades
  });

// Importera autentiseringsroutes
const authRoutes = require("./src/routes/authRoutes.js");

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoute);

// Enkel endpoint för att testa att servern är igång
app.get("/", (req, res) => {
  res.send("Hello from the Server.js");
});

// Starta servern
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
