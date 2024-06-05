// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const product = require("./src/models/product.model.js");
// const productRoute = require("./src/routes/product.route.js");
// require("dotenv").config(); // Importera och konfigurera dotenv

// // Skapa en instans av express
// const app = express();

// // Tillåt alla domäner att göra förfrågningar
// app.use(cors());

// // Middleware för att hantera JSON-data och urlencoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Hämta MongoDB URI och port från miljövariabler
// const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/ajjrofficial";
// const PORT = process.env.PORT || 3000;

// // MongoDB-anslutning
// mongoose
//   .connect(mongoUri, {
//   })
//   .then(() => console.log("Anslutning till MongoDB lyckades"))
//   .catch((err) => {
//     console.error("Anslutning till MongoDB misslyckades: ", err);
//     process.exit(1); // Avsluta processen om anslutningen misslyckades
//   });

// // Importera autentiseringsroutes
// const authRoutes = require("./src/routes/authRoutes.js");
// const orderRoute = require("./src/routes/orderRoute.js")

// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoute);
// app.use("/api/orders", orderRoute);

// // Enkel endpoint för att testa att servern är igång
// app.get("/", (req, res) => {
//   res.send("Hello from the Server.js");
// });

// // Starta servern
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const product = require("./src/models/product.model.js");
const orderRoutes = require("./src/routes/orderRoute.js");
const cookieParser = require("cookie-parser");

const productRoute = require("./src/routes/product.route.js");
require("dotenv").config(); // Importera och konfigurera dotenv
const mongoUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/ajjrofficial";


const app = express();

app.use(express.static("uploads"))

// Tillåt alla domäner att göra förfrågningar
app.use(
  cors({
    /* origin: "https://ajjr.netlify.app", */
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(function (req, res, next) {
  /* res.header("Access-Control-Allow-Origin", "https://ajjr.netlify.app"); */
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(cookieParser());
// Middleware för att hantera JSON-data och urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Hämta MongoDB URI och port från miljövariabler
const PORT = process.env.PORT || 3000;

// MongoDB-anslutning
mongoose

  .connect(mongoUri, {})
  .then(() => console.log("Anslutning till MongoDB lyckades"))
  .catch((err) => {
    console.error("Anslutning till MongoDB misslyckades: ", err);
    process.exit(1); // Avsluta processen om anslutningen misslyckades
  });

// Importera autentiseringsroutes
const authRoutes = require("./src/routes/authRoutes.js");
const orderRoute = require("./src/routes/orderRoute.js");
const authenticateJWT = require("./src/middleware/authenticateJWT.js");

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoutes);

// Enkel endpoint för att testa att servern är igång
app.get("/", (req, res) => {
  res.send("Hello from the Server.js");
});

// Starta servern
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
