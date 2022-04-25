const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://@localhost:5432/messenger",
  {
    logging: false,
    dialect: "postgres",
    username: "timschley",
    password: "pass",
  }
);

module.exports = db;
