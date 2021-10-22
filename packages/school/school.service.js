const SchoolModel = require("./models/school.model")
exports.insertSchool = async (schoolData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const school = new SchoolModel({
                schoolname: schoolData.name,
                registerNo: schoolData.registerNo,
                address: schoolData.address,
                state: schoolData.state,
                isOpen: schoolData.isOpen,
                year: schoolData.year
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
                schoolname: schoolData.name,
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
