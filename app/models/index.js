const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize( dbConfig.DB
                                 ,dbConfig.USER
                                 ,dbConfig.PASSWORD
                                 , { host: dbConfig.HOST
                                     ,dialect: dbConfig.dialect
                                     ,operatorAliases: false
                                     ,pool: {
                                         max: dbConfig.pool.max
                                         ,min: dbConfig.pool.min
                                         ,aquire: dbConfig.pool.aquire
                                         ,idle: dbConfig.pool.idle
                                     }
                                   }
                               );
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.noticias = require("./noticias.model.js")(sequelize, Sequelize);

module.exports = db;
