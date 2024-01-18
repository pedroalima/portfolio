import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema(
    {
        principal: String,
        descricao: String,
    },
    { timestamps: true }
);

const Home = mongoose.models.Project || mongoose.model("Home", HomeSchema);

export default Home;