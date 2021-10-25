const StudentModel = require("./model/student.model")
exports.insertStudent = async (studentData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const student = new StudentModel({
                studentName: studentData.studentName,
                rollNo: studentData.rollNo,
                address: studentData.adress,
                city: studentData.city,
                isActive: studentData.isActive,
                year: studentData.year,
                schoolId: studentData.schoolId
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
            const student = await StudentModel.findByIdAndUpdate({ _id }, {
                studentName: studentData.studentname,
                Roll_no: studentData.Roll_no,
                address: studentData.adress,
                city: studentData.city,
                isActive: studentData.isActive,
                year: studentData.year,
                Student_id: studentData.student_id
            }, { new: true })
            resolve(student)
        } catch (error) {
            reject(error)
        }
    })
}
exports.deleteStudentById = async (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const student = await StudentModel.findByIdAndRemove( _id )
            resolve(student)
        } catch (error) {
            reject(error)
        }
    })
}
exports.findAllStudent = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const studentList = await StudentModel.find()
            resolve(studentList)

        } catch (error) {
            reject(error)

        }
    })
}