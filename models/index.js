const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
  logging: false
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 👉 Importar el modelo de canciones
db.songs = require("./song.model.js")(sequelize, Sequelize);

// 👉 Log para confirmar que se cargó correctamente
console.log("📦 Modelos registrados en Sequelize:", Object.keys(db));

module.exports = db;
