
const SchoolModel = require("./models/school.model")
exports.insertSchool = async (schoolData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const school = new SchoolModel({
                schoolName: schoolData.schoolName,
                registerNo: schoolData.registerNo,
                address: schoolData.address,
                state: schoolData.state,
                isOpen: schoolData.isOpen,
                year: schoolData.year,
                telephoneNo : schoolData.telephoneNo,
                emailId : schoolData.emailId
            });
            const result = await school.save()
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
exports.updateSchoolById = async (_id, schoolData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const school = await school.findByIdAndUpdate({ _id }, {
                schoolName: schoolData.schoolName,
                registerNo: schoolData.registerNo,
                address: schoolData.address,
                state: schoolData.state,
                isOpen: schoolData.isOpen,
                year: schoolData.year
            }, { new: true })
            resolve(school)
        } catch (error) {
            reject(error)
        }
    })
}
exports.getSchoollist = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const schoolList = await SchoolModel.find()
            resolve(schoolList)
        } catch (error) {
            reject(Error)

        }
    })
}
