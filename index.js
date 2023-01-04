const express = require("express")
const app = express()
const port = 5001
const toiletteRoutes = require("./routes/toilette")


require("./models")

app.use("/toilette", toiletteRoutes)

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

