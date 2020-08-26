module.exports = (sequelize, Sequelize) => {
    const Noticia = sequelize.define("noticia", {
        name: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING

        },
        date: {
            type: Sequelize.DATE
        },
        slug: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    });

    return Noticia;
};
