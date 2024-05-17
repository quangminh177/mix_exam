const express = require("express");
const authController = require("../controllers/authController");

let router = express.Router();

router.post('/login/store', authController.login);

module.exports = router;
