function sendResponse(status,message,data){
    try{
       return res.status(status).json({
        success:true,
        data,
        message,
        error:null
       })
    }catch(error){
        throw error;
    }
}

module.exports=sendResponse;