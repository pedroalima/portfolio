const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const conn = require("../database/index")
conn()

app.listen(8000, () => {
    console.log("Server running!")
})