/* eslint-disable @typescript-eslint/no-var-requires */
const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/users").get((req, res) => userController.get(req, res));

router.route("/users").post((req, res) => userController.create(req, res));

module.exports = router;