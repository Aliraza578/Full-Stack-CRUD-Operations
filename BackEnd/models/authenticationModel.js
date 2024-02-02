const { models } = require("../models/index");

module.exports = {
  login: async (email) => {
    try {
      return await models.User.findOne({
        where: {
          email: email,
        },
      });
    } catch (error) {
      return error;
    }
  },
};

// const {models} = require("./index")

