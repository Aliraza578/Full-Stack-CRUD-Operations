const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./config.json");

module.exports = {
  authenticateJWT: (req, res, next) => {
    // console.log(req.headers)
    const authHeader = req.headers.authorization;
    const accessTokenSecret = jwtSecret.key;

    if (authHeader) {
      const token = authHeader.split(" ")[1];
      // const token = authHeader[1];

      jwt.verify(token, accessTokenSecret, (error) => {
        if (error) {
          res.sendStatus(403);
        }
        next();
      });
    } else {
      res.sendStatus(401);
    }
  },
};
