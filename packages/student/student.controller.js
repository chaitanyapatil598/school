
const studentService = require('./student.service')
module.exports = {
    addStudent: async (req, res, next) => {
        try {
            const studentData = req.body
            if (!studentData.studentName) {
                return res.status(400).send({
                    message: 'student name required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!studentData.rollNo) {
                return res.status(400).send({
                    message: 'student Rollno required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!studentData.address) {
                return res.status(400).send({
                    message: 'student address required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!studentData.city) {
                return res.status(400).send({
                    message: 'student city required!',
                    status: false,
                    statusCode: 400
                })
            } else if (studentData.isActive != true && studentData.isActive!= false) {
                return res.status(400).send({
                    message: 'student isActive required!',
                    status: false,
                    statusCode: 400
                })

            } else if (!studentData.year) {
                return res.status(400).send({
                    message: 'student year required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!studentData.schoolId) {
                return res.status(400).send({
                    message: 'schoolId  required!',
                    status: false,
                    statusCode: 400
                })
            }
            const studentResult = await studentService.insertStudent(studentData)
            return res.status(200).send({
                data: studentResult,
                message: 'student added succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.status(500).send({
                message: ' internal server error at add student',
                status: false,
                statusCode: 500,
                error
            })

        }

    },
    deleteStudent: async (req, res, next) => {
        try {
            const _id = req.params.studentId
            if (!_id) {
                return res.status(400).send({
                    message: 'student studentId required!',
                    status: false,
                    statusCode: 400
                })
            }
            const studentResult = await studentService.deleteStudentById(_id)
            if(!studentResult){
                return res.status(200).send({
                    message : 'student id not found',
                    status : true,
                    statusCode : 204
                })

            }
            return res.status(200).send({
                data: studentResult,
                message: 'student deleted succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.status(500).send({
                message: ' internal server error at delete student',
                status: false,
                statusCode: 500,
                error
            })

        }
    },
    getAllStudent: async (req, res, next) => {
        try {
            const studentList = await studentService.findAllStudent()
            if (!studentList) {
                return res.status(200).send({
                    message: 'studentList not found',
                    statusCode: 204,
                    status: true
                })

            }
            return res.status(200).send({
                data: studentList,
                message: 'studentList get successfully',
                status: true,
                statusCode: 200

            })
        } catch (error) {
            return res.status(500).send({
                message: 'studentlist internel server error',
                status: false,
                statusCode: 500,
                error

            })
        }

    }
}