const express = require("express");
const homeController = require("../controllers/homeController");
const adminRoutes = require("./admin.route");
const courseRoutes = require("./course.route");
const authRoutes = require("./auth.route");
const authCtrl = require("../controllers/authController");

let router = express.Router();

router.get('/', homeController.getHomePage);

// Server admin route
router.use('/admin', adminRoutes)

// Authen route
router.use('/auth',authRoutes);

// User routes
router.get('/login', homeController.login);
router.post('/login/store', authCtrl.login);

// Course routes
router.use('/course', courseRoutes)

// Chapter routes

// API route


module.exports = router;