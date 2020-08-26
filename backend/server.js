const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: process.HOST 
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Servicio de noticias"});
});

const PORT = process.env.PORT || 8080;

require("./app/routes/noticias.routes")(app);

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto: " + PORT);
});
