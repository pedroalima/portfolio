import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    cargo: String,
    empresa: String,
    duracao: String,
    local: String,
    perfildeemprego: String,
}, { timestamps: true });

const Experience = mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);

export default Experience;