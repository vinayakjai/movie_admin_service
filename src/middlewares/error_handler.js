const BaseError = require("../errors/base_error");

function errorHndler(req, res, next, errorObject) {
  if (errorObject instanceof BaseError) {
     return res.status(err.status).json({
        success:false,
        errorName:err.errName,
        errReason:err.errMessage,
        data:null,
     })
  }else{
    return res.status(err.status).json({
        success:false,
        error:"Something went wrong please try again!",
        data:null,
    })
  }
}

module.exports = errorHndler;
