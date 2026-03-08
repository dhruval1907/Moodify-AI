const mongoose = require("mongoose")

function mongoConnect() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("connected to DB");
        })
}

module.exports = mongoConnect