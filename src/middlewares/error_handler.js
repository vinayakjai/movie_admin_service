const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/base_error");

function errorHndler(errorObject, req, res, next) {
  try {
    console.log("inside error handler", errorObject);
    if (errorObject instanceof BaseError) {
      return res.status(errorObject.status).json({
        success: false,
        errorName: errorObject.errName,
        errMessage: errorObject.errMessage,
        data: null,
      });
    } else {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        errorMessage: "Something went wrong please try again!",
        error: "INTERNAL SERVER ERROR",
        data: null,
      });
    }
  } catch (error) {
    
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      errorMessage: "Something went wrong please try again!",
      error: "INTERNAL SERVER ERROR",
      data: null,
    });
  }
}

module.exports = errorHndler;
