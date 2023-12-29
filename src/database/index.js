const mongoose = require("mongoose")

async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb+srv://tscpedrolima:xeMeC3gFYxMt4CLZ@cluster0.typblsj.mongodb.net/")
        console.log("Database connected successfully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDatabase