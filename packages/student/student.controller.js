const studentService = require('./student.service')
module.exports = {
    addStudent: async (req, res, next) => {
        try {
            const studentData = req.body
            if (!studentData.name) {
                return res.status(400).send({
                    message: 'student name required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!studentData.Roll_no) {
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
            } else if (schoolData.isActive != true && studentData.isActive != false) {
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
            } else if (!studentData.student_id) {
                return res.status(400).send({
                    message: 'student id required!',
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
            const studentData = req.body
            if (!studentData.name) {
                return res.status(400).send({
                    message: 'student name required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!studentData.Roll_no) {
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
            } else if (schoolData.isActive != true && studentData.isActive != false) {
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
            } else if (!studentData.student_id) {
                return res.status(400).send({
                    message: 'student id required!',
                    status: false,
                    statusCode: 400
                })
            }
            const studentResult = await studentService.deleteStudent(studentData)
            return res.status(200).send({
                data: studentResult,
                message: 'student delete succesfully',
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

    }
}