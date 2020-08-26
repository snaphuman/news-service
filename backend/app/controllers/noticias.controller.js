const db = require("../models");
const Noticia = db.noticias;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: noticias } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, noticias, totalPages, currentPage };
};

exports.findAll = (req, res) => {

    const { page, size, name } = req.query;
    console.log(name);

    var condition = name ? {name: {[Op.substring]: name}} : null;

    const { limit, offset } = getPagination(page, size);

    Noticia.findAndCountAll({ where: condition, limit, offset })
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha ocurrido un error"
            });
        });
};
