const educationDB = require("../models/educationModel");
const response = require("../utils/response");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getEducations = async (req, res) => {
    try {
        const educations = await educationDB.find();
        if (!educations.length) return response.notFound(res);
        response.success(res, "Educations found", educations);
    } catch (error) {
        response.serverError(res, error.message);
    }
};

const createEducations = async (req, res) => {
    try {
        let { login } = req.body;

        let exactEdu = await educationDB.findOne({ login });
        if (exactEdu) return response.error(res, "Login already exists", exactEdu);

        let salt = await bcrypt.genSalt(+process.env.BCRYPT_SALT);
        let hashedPassword = await bcrypt.hash(req.body.password, +salt);

        req.body.password = hashedPassword;

        const education = await educationDB.create(req.body);
        if (!education)
            return response.error(res, "Education not created", education);

        response.success(res, "Education created", education);
    } catch (error) {
        response.serverError(res, error.message);
    }
};

const deleteEducation = async (req, res) => {
    try {
        const { id } = req.params;
        const education = await educationDB.findByIdAndDelete(id);
        if (!education) return response.error(res, "education not deleted");
        response.success(res, "education deleted", education);
    } catch (error) {
        response.serverError(res, error.message);
    }
};

const updateEducation = async (req, res) => {
    try {
        const { id } = req.params;
        const education = await educationDB.findByIdAndUpdate(id, req.body, { new: true });
        if (!education) return response.error(res, "education not updated");
        response.success(res, "education updated", education);
    } catch (error) {
        response.serverError(res, error.message);
    }
};

// Login

const login = async (req, res) => {
    try {
        let { login, password } = req.body;
        let exactEdu = await educationDB.findOne({ login });
        if (!exactEdu) {
            return response.error(res, "Login or password is incorrect");
        }
        let token = await jwt.sign(
            {
                id: exactEdu._id,
                login: exactEdu.login,
            },
            process.env.SECRET_KEY,
            {
                expiresIn: "30d",
            }
        );
        response.success(res, "Login successfully", {
            edu: { ...exactEdu.toJSON() },
            token,
        });
    } catch (err) {
        response.serverError(res, err.message);
    }
};

module.exports = {
    getEducations,
    createEducations,
    deleteEducation,
    updateEducation,
    login
};