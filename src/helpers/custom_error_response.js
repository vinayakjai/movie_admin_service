function sendErrorResponse(res,status_code,errorMessage,error){
    return res.status(status_code).json({
        success:false,
        data:null,
        error,
        errorMessage
    })
}

module.exports=sendErrorResponse;