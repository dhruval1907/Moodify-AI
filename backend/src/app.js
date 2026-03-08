require("dotenv").config()
const express = require("express")
const authRouter = require("../src/routes/auth.routes")
const cookieparser = require("cookie-parser")


const app = express()
app.use(express.json())
app.use(cookieparser())
app.use("/api/auth", authRouter)



module.exports = app