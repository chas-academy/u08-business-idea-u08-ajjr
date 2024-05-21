const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Importera och konfigurera dotenv

// Skapa en instans av express, middleware för att hantera JSON-data
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// routes

// Enkel endpoint för att testa att servern är igång
app.get('/', (req, res) => {
  res.send("Hello from the Server.js");
});

// Anslut till MongoDB-databasen
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
  console.log('Anslutning till MongoDB lyckades');
  // Starta servern
  app.listen(PORT, () => {
    console.log(`Servern lyssnar på port ${PORT}`);
  });

}).catch(err => {
  console.error('Anslutning till MongoDB misslyckades: ', err);
  process.exit(1); // Avsluta processen om anslutningen misslyckades
});

