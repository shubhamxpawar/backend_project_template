class ApiError extends Error {
    constructor(
        message = "something went wrong",
        errors = [],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode
        this.errors = errors;
        this.data = null
        this.message = message
        this.success = false

        stack ? this.stack = stack : Error.captureStackTrace(this, this.constructor)
    }
}

export default ApiError