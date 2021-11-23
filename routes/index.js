
const schoolController = require('../packages/school/school.controller')
const studentController = require('../packages/student/student.controller')
const teacherController = require('../packages/teacher/teacher.controller')
module.exports = (app) => {

    // welcome test api
    app.get('/', (req, res, next) => {
        console.log('hello from client')
        try {
            return res.status(200).send({
                message: ' welcome to school API',
                status: true,
                statusCode: 200
            }
            )
        } catch (error) {
            return res.status(500).send({
                message: "internal server error",
                status: false,
                statusCode: 500,
                error
            })
        }
    })

    // add school api
    app.post('/school/add', schoolController.addSchool)
    app.get('/school/list', schoolController.getSchoolList)

    //  add student api
    app.post('/student/add', studentController.addStudent)
    app.delete('/student/delete/:studentId', studentController.deleteStudent)
    app.get('/student/findList', studentController.getAllStudent)

    /// add teacher api

    app.post('/teacher/add', teacherController.addTeacher)
    app.delete('/teacher/delete/:teacherId', teacherController.deleteTeacher)
    app.get('/teacher/AllList', teacherController.getAllTeacher)
    app.get('/teacher/OneTeacher', teacherController.getOneTeacher)
    app.put('/teacher/update/:teacherId', teacherController.updateTeacher)
}

