const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Importera och konfigurera dotenv

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ajjr', (req, res) => {
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

