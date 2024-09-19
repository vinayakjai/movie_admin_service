const BaseError = require("./base_error");

class BadRequest extends BaseError{
      constructor(status,errName,errMessge){
         super(status,errName,errMessage);
      }
}

module.exports=BadRequest;