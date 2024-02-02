const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Address extends Model {}

Address.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lattitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longtitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    
    sequelize,
    modelName: "Address",
    timestamps: true,
    paranoid: true,
  }
);
module.exports = Address;
