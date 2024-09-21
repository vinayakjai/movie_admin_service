const BaseError = require("./base_error");

class SequelizeError extends BaseError{
    constructor(status,errName,errMessage){
        super(status,errName,errMessage)
      
    }
}

module.exports=SequelizeError;