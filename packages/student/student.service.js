const studentModel = require("./model/student.model")
exports.insertStudent = async (studentData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const student = new studentModel({
                studentname: studentData.studentname,
                Roll_no:studentData.Roll_no,
                address: studentData.adress,
                city: studentData.city,
                isActive: studentData.isActive,
                year:studentData.year,
                Student_id :studentData.student_id
            });
            const result = await student.save()
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
exports.updateStudentById = async (_id, studentData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const student = await student.findByIdAndUpdate({ _id }, {
                studentname: studentData.studentname,
                Roll_no:studentData.Roll_no,
                address: studentData.adress,
                city: studentData.city,
                isActive: studentData.isActive,
                year:studentData.year,
                Student_id :studentData.student_id
            }, { new: true })
            resolve(school)
        } catch (error) {
            reject(error)
        }
    })
}
exports.deleteStudentById = async (_id, studentData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const student = await student.findByIdAndDelete({ _id }, {
                studentname: studentData.studentname,
                Roll_no:studentData.Roll_no,
                address: studentData.adress,
                city: studentData.city,
                isActive: studentData.isActive,
                year:studentData.year,
                Student_id :studentData.student_id
            }, {new : true} )
            resolve(student)
        }catch (error) {
            reject(error)
        }
    })
}
