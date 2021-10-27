const mongoose = require('mongoose');
const schoolSchema = new mongoose.Schema({
    schoolname: String,
    registerNo: Number,
    address: String,
    state: String,
    isOpen: Boolean,
    year: Number, 
    telephoneNo: Number,
    emailId:String 
});

const SchoolModel = mongoose.model("school", schoolSchema);
// school module export 
module.exports = SchoolModel;
