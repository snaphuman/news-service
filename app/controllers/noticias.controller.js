const db = require("../models");
const Noticia = db.noticias;
console.log(Noticia);
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {

    Noticia.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha ocurrido un error"
            });
        });
};
