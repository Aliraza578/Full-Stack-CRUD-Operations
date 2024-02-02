// const authenticationService = require("../services/authenticationService");
// const joi = require("joi");

// const loginSchema = joi.object({
//   email: joi.string().email().required(),
//   password: joi.string().required(),
// });

// module.exports = {
//   login: async (req, res) => {
//     try {
//       const validation = await loginSchema.validateAsync(req.body);
//       console.log(validation)
//       if (validation.error) {
//         res.send(validation.error);
//       }
//       const response = await authenticationService.login(validation);
//       res.send(response);
//     } catch (error) {
//       res.send(error);
//     }
//   },
// };
const authenticationService = require("../services/authenticationService");
const joi = require("joi");

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

module.exports = {
  login: async (req, res) => {
    try {
      console.log(req.body);
      const validate = await loginSchema.validateAsync(req.body);
      if (validate.error) {
        res.send(validate.error);
      }
      const response = await authenticationService.login(validate);
      if (response) {
        res.header
        res.send({ response });
        console.log(response);
      }
    } catch (error) {
      res.send(error);
    }
  },
};
