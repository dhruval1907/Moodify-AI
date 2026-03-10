const userModel = require("../models/auth.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const blacklistModel = require("../models/blacklist.model")
const redis = require("../config/cache")

async function registerUser(req, res) {

    const { username, email, password } = req.body



    const isUserAlreadyExits = await userModel.findOne({
        $or: [{ username }, { email }]
    })

    if (isUserAlreadyExits) {
        return res.status(401).json({
            message: "user already exists"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hash
    })

    const token = jwt.sign(
        {
            id: user._id,
            username: user.username
        },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
    )

    console.log(req.body)

    res.cookie("token", token)

    res.status(201).json({
        message: "user registered",
        user
    })
}

async function loginUser(req, res) {

    const { username, email, password } = req.body

    const user = await userModel.findOne({
        $or: [{ username }, { email }]
    }).select("+password")

    


    if (!user) {
        return res.status(401).json({
            message: "user not valid"
        })
    }

    const ispasswordMatched = await bcrypt.compare(password, user.password)

    if (!ispasswordMatched) {
        return res.status(401).json({
            message: "password didn't match"
        })
    }

    const token = jwt.sign(
        {
            id: user._id,
            username: user.username
        },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
    )

    res.cookie("token", token)

    res.status(200).json({
        message: "user logged in",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })


}

async function getMe(req, res) {

    const user = await userModel
        .findById(req.user.id)
        .select("-password")

    res.status(200).json({
        message: "user fetched successfully",
        user
    })
}

async function logOut(req, res) {

    const token = req.cookies.token

    res.clearCookie("token")

    await redis.set(token, Date.now().toString())

    await blacklistModel.create({
        token
    })

    res.status(200).json({
        message: "user logged-out successfully"
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    logOut
}