/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const cors = require("cors");
const conn = require("./database/index");
const routes = require("./routes/router");
require("dotenv").config();

// App 
const app = express();
app.use(cors());
app.use(express.json());

// DB connection
conn();

//Routes
app.use("/api", routes);

// Server connection
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Server is running!");
});