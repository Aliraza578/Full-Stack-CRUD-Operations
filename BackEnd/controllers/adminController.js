// module.exports =  {
//     getUsers: function(req, res){
//         res.send("Admin Controller")
//     }

//validation Schema
// const joi = require("joi");

// const userSchema = joi.object({
//   id: joi.number().required(),
//   name: joi.string().required(),
//   email: joi.string().email().required(),
// });
const joi = require("joi");
const adminService = require("../services/adminService");

const creatUserSchema = joi.object({
  fName: joi.string().required(),
  lName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  addressId:joi.string().required(),
});
const updateUserSchema = joi.object({
  id: joi.number().required(),
  fName: joi.string(),
  lName: joi.string(),
  email: joi.string(),
  password: joi.string(),
});
const getUserById = joi.object({
  id: joi.number().required(),
});


// }
// module.exports = {
//   getUsers: function (req, res) {
//     const query = req.query;
//     query.id=parseInt(query.id)
//     res.send(query);
//   },
// };

module.exports = {
  createUser: async (req, res) => {
    try {
      console.log(req.body)
      const validate = await creatUserSchema.validateAsync(req.body);
      if (validate.error) {
        res.send(validate.error);
      }
      const response = await adminService.createUser(validate);
      res.send(response);
    } catch (error) {
      res.send(error.message);
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const response = await adminService.getAllUsers();
      res.send({response});
    } catch (error) {
      res.send(error);
    }
  },
  getUserById: async (req, res) => {
    try {
      const validate = await getUserById.validateAsync(req.query);

      if (validate.error) {
        res.send(validate.error);
      }
      const response = await adminService.getUserById(validate.id);
      res.send(response);
    } catch (error) {
      res.send(error.message);
    }
  },
  updateUser: async (req, res) => {
    try {
      console.log(req.body)
      const response = await updateUserSchema.validateAsync(req.body);
      // console.log(response);
      if (response.error) {
        res.send(response.error);
      }
      const data = await adminService.updateUser(response);
      res.send(data);
    } catch (error) {
      return error;
    }
  },
  deleteUser: async (req, res) => {
    try {
      const response = await getUserById.validateAsync(req.query);
      if (response.error) {
        res.send(response.error);
      }
      const data = await adminService.deleteUser(response.id);

      res.send(data);
    } catch (error) {
      return error;
    }
  },

};

// createUser: async (req, res) => {
//   try {
//     const validate = await userSchema.validateAsync(req.body);
//     res.send(validate);
//   } catch (error) {
//     res.send(error.message);
//   }
// },
