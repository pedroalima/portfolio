/* eslint-disable @typescript-eslint/no-var-requires */
const router = require("express").Router();

// Project Router
const projectRouter = require("./project");

router.use("/", projectRouter);

module.exports = router;