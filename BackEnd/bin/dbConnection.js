const { Sequelize } = require("sequelize");
const dbConnection = require("../config.json");

const database = new Sequelize(dbConnection.db);

database
  .authenticate()
  .then(() => {
    console.log("database Connected");
  })
  .catch((error) => {
    console.log(error);
  });
module.exports = database;
