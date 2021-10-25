
const teacherService = require('./teacher.service')


module.exports = {
    addTeacher: async (req, res, next) => {
        try {
            const teacherData = req.body
            if (!teacherData.teacherName) {
                return res.status(400).send({
                    message: 'teacher name required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!teacherData.adress) {
                return res.status(400).send({
                    message: 'teacher adress required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!teacherData.department) {
                return res.status(400).send({
                    message: 'teacher department required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!teacherData.workExperience) {
                return res.status(400).send({
                    message: 'teacher work experience required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!teacherData.isActive) {
                return res.status(400).send({
                    message: 'teacher isActive required!',
                    status: false,
                    statusCode: 400
                })
            } else if (teacherData.isActive != true && teacherData.isActive != false) {
                return res.status(400).send({
                    message: 'teacher isActive required!',
                    status: false,
                    statusCode: 400
                })
            }
            const teacherResult = await teacherService.insertTeacher(teacherData)
            return res.status(200).send({
                data: teacherResult,
                message: 'teacher  added succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.status(500).send({
                message: ' internal server error at addteacher',
                status: false,
                statusCode: 500,
                error
            })

        }
    },
    deleteTeacher: async (req, res, next) => {
        try {
            const _id = req.params.teacherId
            if (!_id) {
                return res.status(400).send({
                    message: 'teacher required!',
                    status: false,
                    statusCode: 400
                })
            }
            const teacherResult = await teacherService.deleteTeacherById(_id)
            if (!teacherResult) {
                return res.status(200).send({
                    message: 'teacher id not found',
                    status: true,
                    statusCode: 204
                })

            }
            return res.status(200).send({
                data: teacherResult,
                message: 'teacher deleted succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.status(500).send({
                message: ' internal server error at delete teacher',
                status: false,
                statusCode: 500,
                error
            })

        }
    },
    getAllTeacher: async (req, res, next) => {
        try {
            const teacherList = await teacherService.findAllTeacher({

                
            })
            if (!teacherList) {
                return res.status(200).send({
                    message: 'teacherList not found',
                    statusCode: 204,
                    status: true
                })

            }
            return res.status(200).send({
                data: teacherList,
                message: 'teacherList get successfully',
                status: true,
                statusCode: 200

            })
        } catch (error) {
            return res.status(500).send({
                message: 'teacherList internel server error',
                status: false,
                statusCode: 500,
                error

            })
        }

    },
    getOneTeacher: async (req, res, next) => {
        try {
            const oneTeacher = await teacherService.findOneTeacher()
            if (!oneTeacher) {
                return res.status(200).send({
                    message: 'oneTeacher not found',
                    statusCode: 204,
                    status: true
                })

            }
            return res.status(200).send({
                data: teacherList,
                message: 'oneTeacher get successfully',
                status: true,
                statusCode: 200

            })
        } catch (error) {
            return res.status(500).send({
                message: 'oneTeacher internel server error',
                status: false,
                statusCode: 500,
                error

            })
        }

    }
}