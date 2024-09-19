class BaseError extends Error{
    constructor(status,errName,errMessage){
         super(errName,{cause:errMessage});
         this.status=status;
         this.errName=errName;
         this.errMessage=errMessage;
    }
}
/**
 * succes status
 */

module.exports=BaseError;