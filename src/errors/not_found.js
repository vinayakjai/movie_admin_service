const BaseError = require("./base_error");

class NotFound extends BaseError{
      constructor(status,errName,errMessage){
         super(status,errName,errMessage);
      }
}

module.exports=NotFound;