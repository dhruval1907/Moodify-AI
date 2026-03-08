const app = require("./src/app")
const mongo = require("./src/config/database")

mongo()

app.listen(3000, () => {
    console.log("server is running on 3000");
})