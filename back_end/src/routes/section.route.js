import express from "express"
import homeController from "../controllers/homeController";
import validateEmail from "../middlewares/validateEmail";
import UserController from "../controllers/UserController";
import AuthController from "../controllers/AuthController";
import apiRoutes from "./admin.route";

let router = express.Router();

router.get('/', homeController.getHomePage);

// Server admin route
router.use('/admin', apiRoutes)

// User route
router.get('/get-users', UserController.display);
router.get('/auth/login', AuthController.login);
router.post('/login/store', UserController.login);

// API route


module.exports = router;