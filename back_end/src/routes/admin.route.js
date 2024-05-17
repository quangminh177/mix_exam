const express = require("express");
const homeController = require("../controllers/homeController");

let router = express.Router();

router.get('/create-user', homeController.createUser);
router.post('/post-user', homeController.postUser);
router.get('/edit-user', homeController.getEditUser);
router.get('/update-user', homeController.updateUser);
router.get('/delete-user', homeController.deleteUser);
router.get('/get-users', homeController.displayUsers);

module.exports = router;
