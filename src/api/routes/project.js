/* eslint-disable @typescript-eslint/no-var-requires */
const router = require("express").Router();
const projectController = require("../controllers/projectController");

router.route("/projects").post((req, res) => projectController.create(req, res));

module.exports = router;