const mongoose = require("mongoose");
const { Schema} = require('mongoose')

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;