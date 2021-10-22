const mongoose = require('mongoose');
const schoolSchema = new mongoose.Schema({
    schoolname: String,
    registerNo: Number,
    address: String,
    state: String,
    isOpen: Boolean,
    year: Number
});

const SchoolModel = mongoose.model("school", schoolSchema);

module.exports = SchoolModel;