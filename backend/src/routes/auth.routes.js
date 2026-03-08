const express = require("express")
const userModel = require("../models/auth.model")
const authRouter = express.Router()
const authController = require("../controllers/auth.controller")
const authMiddelware = require("../middleware/auth.middleware")

authRouter.post("/register", authController.registerUser)

authRouter.post("/login", authController.loginUser)

authRouter.get("/getme", authMiddelware.authUser, authController.getMe)

authRouter.get("/log-out",authController.logOut)



module.exports = authRouter
