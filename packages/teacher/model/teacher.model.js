const mongoose = require('mongoose')
const teacherSchema = new mongoose.Schema({
    teacherName: String,
    adress: String,
    department: String,
    workExperience: Number,
    isActive: Boolean,
    schoolId : String
})
const teacherModel = mongoose.model("teacher", teacherSchema);

module.exports = teacherModel;