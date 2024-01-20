import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema(
    {
        principal: String,
        descricao: String,
    },
    { timestamps: true }
);

const Home = mongoose.models.Home || mongoose.model("Home", HomeSchema);

export default Home;