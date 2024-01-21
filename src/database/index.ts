import mongoose from "mongoose";

async function connectToDatabase() {
    try {
        const mongoDB_URI = process.env.MONGODB_URI;

        if (!mongoDB_URI) {
            throw new Error("Environment variable MONGODB_URI not set");
        } else {
            await mongoose.connect(mongoDB_URI);
            console.log("Database connected successfully");
        }
    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase;