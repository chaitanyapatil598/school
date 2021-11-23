const SchoolService = require('./school.service')
module.exports = {
    addSchool: async (req, res, next) => {
        try {
            const schoolData = req.body
            if (!schoolData.schoolName) {
                return res.status(400).send({
                    message: 'school name required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!schoolData.registerNo) {
                return res.status(400).send({
                    message: 'school regiterNo required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!schoolData.address) {
                return res.status(400).send({
                    message: 'school address required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!schoolData.state) {
                return res.status(400).send({
                    message: 'school state required!',
                    status: false,
                    statusCode: 400
                })
            } else if (schoolData.isOpen != true && schoolData.isOpen != false) {
                return res.status(400).send({
                    message: 'school isOpen required!',
                    status: false,
                    statusCode: 400
                })

            } else if (!schoolData.year) {
                return res.status(400).send({
                    message: 'school year required!',
                    status: false,
                    statusCode: 400
                })
            }
            const schoolResult = await SchoolService.insertSchool(schoolData)
            return res.status(200).send({
                data: schoolResult,
                message: 'school added succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.status(500).send({
                message: ' internal server error at add school',
                status: false,
                statusCode: 500,
                error
            })

        }

    },
    getSchoolList: async (req, res, next) => {
        try {
            const schoolList = await SchoolService.getSchoollist()
            return res.status(200).send({
                data: schoolList,
                message: 'school list get succesfully',
                status: false,
                statusCode: 200

            })
        } catch (error) {
            return res.status(500).send({
                message: 'internal server at add school list',
                status: false,
                statusCode: 500,
                error
            })
        }
    }
}
