const db = require("../models");
const Noticia = db.noticias;
const Op = db.Sequelize.Op;

const getPagination = (page, size, all) => {
    const limit = size ? +size : all ? null : 10;
    const offset = page ? page * limit : all ? null : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: noticias } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, noticias, totalPages, currentPage };
};

exports.findAll = (req, res) => {

    const { page, size, name, all } = req.query;

    var condition = name ? {name: {[Op.substring]: name}} : null;

    const { limit, offset } = getPagination(page, size, all);

    Noticia.findAndCountAll({
        where: condition,
        limit: limit,
        offset: offset,
        order: [["id", "DESC"]]})

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
