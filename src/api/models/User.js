/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
    }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = { User };