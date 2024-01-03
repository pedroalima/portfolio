/* eslint-disable @typescript-eslint/no-var-requires */
const { User: UserModel } = require("../models/User");

const userController = {
    create: async (req, res) => {
        try {
            const user = {
                username: req.body.username,
                password: req.body.password,
            };

            const response = await UserModel.create(user);

            res
                .status(200)
                .json({ response, msg: "User created successfully!"});

        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const user = await UserModel.find();

            res.json(user);

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = userController;