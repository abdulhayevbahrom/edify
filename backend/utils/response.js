class response {
    success(res, message = "success", data = null) {
        return res.status(200).json({
         
            status: true,
            message,
            innerData: data,
        });
    }

    error(res, message = "error", data = null) {
        return res.status(400).json({
            status: false,
            message,
            innerData: data,
        });
    }

    serverError(res, message = "Server Error", data = null) {
        return res.status(401).json({
            status: false,
            message,
            innerData: data,
        });
    }

    notFound(res, message = "Server NotFound", data = null) {
        return res.status(404).json({
            status: false,
            message,
            innerData: data,
        });
    }

    unauthorized(res,message = "unauthorized", data= null) {
        return res.status(401).json({
            status: false,
            message,
            innerData: data,
            });
    }
}
module.exports = new response();