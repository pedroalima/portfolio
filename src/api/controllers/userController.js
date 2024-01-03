/* eslint-disable @typescript-eslint/no-var-requires */
const { User: UserModel } = require("../models/User");

const userController = {
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