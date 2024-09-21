function sendSuccessResponse(res,status,message,data){
    console.log("in success response",data)
    try{
        console.log("sending response")
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

module.exports=sendSuccessResponse;