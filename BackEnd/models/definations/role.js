const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Role extends Model {}

Role.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Role",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Role;
