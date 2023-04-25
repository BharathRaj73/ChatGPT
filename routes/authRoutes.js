const express = require("express");
const {
  registerController,
  loginController,
  logOutController,
} = require("../controllers/authController");

//router object
const router = express.Router();

//routes
//REGISTER
router.post("/register", registerController);

//REGISTER
router.post("/login", loginController);

//REGISTER
router.post("/logout", logOutController);
