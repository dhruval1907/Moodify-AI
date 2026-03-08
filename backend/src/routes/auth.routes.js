const express = require("express")
const userModel = require("../models/auth.model")
const authRouter = express.Router()
const authController = require("../controllers/auth.controller")


authRouter.post("/register", authController.registerUser)

authRouter.post("/login", authController.loginUser)


module.exports = authRouter
