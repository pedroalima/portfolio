/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
    {
        name: String,
        website: String,
        technologies: String,
        github: String,
    },
    { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

module.exports = { Project };