const teacherModel = require("./model/teacher.model")
exports.insertTeacher = async (teacherData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const teacher = new teacherModel({
                teacherName: teacherData.teacherName,
                department: teacherData.department,
                address: teacherData.address,
                isActive: teacherData.isActive,
                workExperience: teacherData.workExperience
            });
            const result = await teacher.save()
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
exports.updateTeacherById = async (_id, teacherData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const teacher = await teacherModel.findByIdAndUpdate({ _id },
                {
                    teacherName: teacherData.teacherName,
                    department: teacherData.department,
                    address: teacherData.address,
                    isActive: teacherData.isActive,
                    workExperience: teacherData.workExperience
                },
                { new: true })
            resolve(teacher)
        } catch (error) {
            reject(error)
        }
    })
}
exports.deleteTeacherById = async (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const teacher = await teacherModel.findByIdAndRemove(_id)
            resolve(teacher)
        } catch (error) {
            reject(error)
        }
    })
}
exports.findOneTeacher = async (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const teacher = await teacherModel.findOne({ _id })
            resolve(teacher)
        } catch (error) {
            reject(error)
        }
    })
}
exports.findAllTeacher = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const teacher = await teacherModel.find()

            resolve(teacher)
        } catch (error) {
            reject(error)
        }
    })
}