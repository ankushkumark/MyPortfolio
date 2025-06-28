const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: String,
    dob: String,
    email: String,
    password: String,
    gender: String,
    domain: String,
});

module.exports = mongoose.model('User', userSchema);
