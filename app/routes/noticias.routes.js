module.exports = app => {
    const noticias = require("../controllers/noticias.controller.js");

    var router = require("express").Router();

    router.get("/", noticias.findAll);

    app.use("/api/noticias", router);
};
