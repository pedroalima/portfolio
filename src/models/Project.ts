import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    nome: String,
    tecnologias: String,
    site: String,
    github: String,
},
{ timestamps: true });

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;