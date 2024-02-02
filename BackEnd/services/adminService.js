const adminModel = require("../models/adminModel");
const bcrypt = require("bcrypt")
module.exports = {
  createUser: async (body) => {
    try {
      body.password= await bcrypt.hash(body.password, 10)
      const response = await adminModel.creatUser(body);
      if (response) {
        return response;
      }
      return "User Not Created";
    } catch (error) {
      return error;
    }
  },
  getAllUsers: async () => {
    try {
      const response = await adminModel.getAllUsers();
      if (response) {
        return response;
      }
      return "No User Found";
    } catch (error) {
      return error;
    }
  },
  getUserById: async (id) => {
    try {
      const response = await adminModel.getUserById(id);
      if (response) {
        return response;
      }
      return "No User Found";
    } catch (error) {
      return error;
    }
  },
  updateUser: async (body) => {
    try {
      const user = await adminModel.getUserById(body.id);
      if (user) {
        const response = await adminModel.updateUser(body);
        if (response) {
          return "successful updated";
        }
        return "Unable To Update";
      }
      return "No User Exist";
    } catch (error) {
      return error;
    }
  },
  deleteUser: async (id) => {
    try {
      const user = await adminModel.getUserById(id);
      console.log(user)
      if (user) {
        const response = await adminModel.deleteUser(id);
        if (response) {
          return "Succcesful deleted";
        }
        return "Unable To delete";
      }
      return "No User Exist";
    } catch (error) {
      return error;
    }
  },
};
