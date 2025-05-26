const express = require("express");
const UserController = require("../controllers/userController");

const router = express.Router();

router.post("/login", UserController.loginUser);
router.post("/register", UserController.createUser);
router.post("/relogin", UserController.reloginUser);

module.exports = router;