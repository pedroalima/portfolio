const express = require("express")
const cors = require("cors")
require("dotenv").config()

// App 
const app = express()
app.use(cors())
app.use(express.json())

// DB connection
const conn = require("../database/index")
conn()

// Server connection
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log("Server running!")
})