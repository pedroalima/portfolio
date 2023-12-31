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

            res
                .status(201)
                .json({ response, msg: "Project created successfully" });

        } catch (error) {
            console.log(error);
        }
    },
    getAll: async(req, res) => {
        try {
            const projects = await ProjectModel.find();

            res.json(projects);

        } catch (error) {
            console.log(error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const project = await ProjectModel.findById(id);

            if(!project) {
                res
                    .status(404)
                    .json({ msg: "Project not founded"});
            }

            res.json(project);

        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const project = await ProjectModel.findById(id);

            if(!project) {
                res
                    .status(404)
                    .json({ msg: "Project not founded"});
            }

            const deleteProject = await ProjectModel.findByIdAndDelete(id);

            res
                .status(200)
                .json({ deleteProject, msg: "Project deleted successfully" });

        } catch (error) {
            console.log(error);
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id;

            const project = {
                name: req.body.name,
                website: req.body.website,
                technologies: req.body.technologies,
                github: req.body.github,
            };

            const updateProject = await ProjectModel.findByIdAndUpdate(id, project);

            if(!updateProject) {
                res
                    .status(404)
                    .json({ msg: "Project not founded"});
            }

            res.status(200).json({ project, msg: "Project update successfully"});

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = projectController;