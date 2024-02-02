const router = require("express").Router()
const addressController = require ("../controllers/addressController")

router.post("/createAddress", addressController.createAddress)

module.exports = router