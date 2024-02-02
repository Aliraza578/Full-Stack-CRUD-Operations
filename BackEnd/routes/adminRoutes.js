// const router =require('express').Router();
// const adminController  =require('../controllers/adminController');

// router.get("/getUser",adminController.getUsers);
// module.exports = router;

const router = require("express").Router();
const adminController = require("../controllers/adminController");
// const middelware = require("../middleware");
// middelware.authenticateJWT,


router.post("/createUser", adminController.createUser);
router.get("/getAllUser", adminController.getAllUsers);
router.get("/getUserById", adminController.getUserById);
router.put("/updateUser", adminController.updateUser);
router.delete("/deleteUser",adminController.deleteUser);


module.exports = router;
