const jwt = require('jsonwebtoken');
const response = require("../utils/response");

const auth = (req, res, next) => {
    try {
        let path = req.originalUrl;
        let openRoutes = ["/api/edu/login"];
        if (openRoutes.includes(path)) return next();

        const token = req?.headers?.authorization?.split(" ")[1];
        if (!token) return response.unauthorized(res, "Unauthorized");

        let result = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!result) return response.unauthorized(res, "invalid token");

        req.edu = result;
        next();
    } catch (err) {
        response.serverError(res, err.message);
    }
};

module.exports = auth;