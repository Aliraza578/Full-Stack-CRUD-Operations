const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Courses extends Model {}

Courses.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Courses",
    timestamps: true,
    paranoid: true,
  }
);
module.exports = Courses;
