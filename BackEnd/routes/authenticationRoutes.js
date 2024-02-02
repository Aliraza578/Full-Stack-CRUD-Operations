const router = require("express").Router();
const authenticationController = require("../controllers/authenticationController");

router.post("/login", authenticationController.login);

module.exports = router;
