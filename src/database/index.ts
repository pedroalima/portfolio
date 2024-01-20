import mongoose from "mongoose";

async function connectToDatabase() {
    try {
        const mongodbUri = process.env.MONGODB_URI;

        if (!mongodbUri) {
            throw new Error("MONGODB_URI not defined in the environment variables.");
        }

        await mongoose.connect("mongodb+srv://tscpedrolima:xeMeC3gFYxMt4CLZ@cluster0.typblsj.mongodb.net/");
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase;