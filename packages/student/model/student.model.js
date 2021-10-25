const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    studentName: String,
    rollNo:Number,
    address: String,
    city: String,
    isActive: Boolean,
    year: Number,
    schoolId : String
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;