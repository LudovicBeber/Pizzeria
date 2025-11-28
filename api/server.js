require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

const app = express();

const PORT = process.env.APP_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (_, res) => {
    return res.send('<h1 style="font-family: sans-serif">Bienvenue sur mon API !</h1>');
});

/* Routes */
// Auth routes
// app.use('/auth', require("./src/routes/auth.routes"));
// Products routes
// app.use('/products', require("./src/routes/products.routes"));

connectDB();

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port : http://localhost:${PORT}`);
});