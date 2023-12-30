/* eslint-disable @typescript-eslint/no-var-requires */
const { Project: ProjectModel } = require("../models/Project");

const projectController = {
    create: async(req, res) => {
        try {
            const project = {
                name: req.body.name,
                website: req.body.website,
                technologies: req.body.technologies,
                github: req.body.github,
            };

            const response = await ProjectModel.create(project);

            res.status(201).json({ response, msg: "Project created successfully" });

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = projectController;