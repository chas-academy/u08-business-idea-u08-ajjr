const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Anslut till MongoDB-databasen
mongoose.connect('mongodb://localhost:27017', {

}).then(() => {
  console.log('Anslutning till MongoDB lyckades');
}).catch(err => {
  console.error('Anslutning till MongoDB misslyckades: ', err);
  process.exit(1); // Avsluta processen om anslutningen misslyckades
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern lyssnar på port ${PORT}`);
});
