import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
    sobre: String,
    projects: String,
    experience: String,
    skills: String
}, { timestamps: true });

const About = mongoose.models.About || mongoose.model("About", AboutSchema);

export default About;