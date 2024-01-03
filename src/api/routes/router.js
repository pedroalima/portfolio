/* eslint-disable @typescript-eslint/no-var-requires */
const router = require("express").Router();

// Project Router
const projectRouter = require("./project");
const userRouter = require("./user");

router.use("/", projectRouter, userRouter);

module.exports = router;