const  express = require("express")
const app = express()

app.post("/", (req, res) => {
    res.send("ok")
})

module.exports= app