const addressModel = require("../models/addressModel");

module.exports = {
  createAddress: async (body) => {
    try {
      const response = await addressModel.createAddress(body);
      if (response) {
        return response;
      }
      return "Unable to Create Address";
    } catch (error) {
      return error;
    }
  },
};
