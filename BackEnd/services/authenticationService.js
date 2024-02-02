const authenticationModel = require("../models/authenticationModel");
const bcrypt = require("bcrypt");
const { jwtSecret } = require("../config.json");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (body) => {
    try {
      const user = await authenticationModel.login(body.email);
      if (!user) {
        return "Incorrect Username Or Password";
      }

      const check = await bcrypt.compare(body.password, user.password);

      if (check) {
        const accessTokenSecret = jwtSecret.key;
        const accessToken = jwt.sign({ email: user.email }, accessTokenSecret, {
          expiresIn: "20m",
        });

        return accessToken;
      }
      return "Incorrect Username Or Password";
    } catch (error) {
      return error;
    }
  },
};
