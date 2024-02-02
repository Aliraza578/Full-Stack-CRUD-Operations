const sequelize = require("../bin/dbConnection");
let db = {};

//importing tables/models
const User = require("./definations/user");
const Role = require("./definations/role");
const Address = require("./definations/address");
const Courses = require("./definations/courses");

//relations starts here
Address.hasOne(User, { foreignKey: "addressId" });
User.belongsTo(Address, {foreignKey: "addressId"});

Role.hasMany(User, { foreignKey: "roleId" });
User.belongsTo(Role, {foreignKey: "roleId"})

Courses.belongsToMany(User, { through: "UserCourse" });
User.belongsToMany(Courses, {through: "UserCourse"})

const models = {
  User,
  Role,
  Address,
  Courses,
};

db.sequelize = sequelize;
sequelize.models = models;
module.exports = { db, models };
