const addressService = require("../services/addressService");
const joi = require("joi");

const createAddressSchema = joi.object({
    address: joi.string().required(),
    lattitude: joi.string().required(),
    longtitude: joi.string().required(),
  });

  module.exports = {
    createAddress: async (req, res) => {
        try {
          const validate = await createAddressSchema.validateAsync(req.body);
          if (validate.error) {
            res.send(validate.error);
          }
          const response = await addressService.createAddress(validate);
          res.send(response);
        } catch (error) {
          res.send(error.message);
        }
      },
  }