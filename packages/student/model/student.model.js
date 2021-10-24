const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    studentname: String,
    Roll_no:Number,
    address: String,
    city: String,
    isActive: Boolean,
    year: Number,
    Student_id : String
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;