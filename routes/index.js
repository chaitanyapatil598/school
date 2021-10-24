
const schoolController = require('../packages/school/school.controller')

const studentController= require('../packages/student/student.controller')
module.exports = (app) => {

    // welcome test api
    app.get('/', (req, res,next) => {
        console.log('hello from client')
        try {
            return res.status(200).send({
                massage: ' welcome to school API',
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


//  add student api
app.post('/student/add', studentController.addStudent)
app.delete('/student/delete', studentController.deleteStudent)
}

