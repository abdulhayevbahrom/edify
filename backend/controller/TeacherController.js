const TeacherDB = require("../models/teacherModel");
const response = require("../utils/response");
const bcrypt = require("bcrypt");

class TeacherController {
    async getTechers(req, res) {
        try {
            const teachers = await TeacherDB.find({ edu_id: req.edu.id});
            if (!teachers.length) return response.notFound(res);
            response.success(res, "teachers found", techers);
        } catch (err) {
            response.serverError(res, err.message);
        }
    }

    async createTecher ( req, res) {
        try {
            let new_data = { ...req.body, edu_id: req.edu.id };

            let salt = await bcrypt.genSalt(+process.env.BCRYPT_SALT);
            let hashedPassword = await bcrypt.hash(new_data.password, +salt);
            new_data.password = hashedPassword;

            const teacher = await TeacherDB.create(new_data);
            if (!teacher) return response.error(res, " Techer not created");
            response.success(res, "Teacher created", teacher);
            } catch (err) {
                response.serverError(res, err.message);
        }
    }
}
module.exports = new TeacherController();