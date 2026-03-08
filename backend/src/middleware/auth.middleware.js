const userModel = require("../models/auth.model")
const jwt = require("jsonwebtoken")

async function authUser(req, res, next) {

    const token = req.cookies.token

    if (!token) {
        return res.stattus(401).json({
            message: "token not provided"
        })
    }

    let decoded = null

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded
    } catch (err) {
        return res.status(401).json({
            message: "invalid token "
        })
    }
}


module.exports = authUser