function sendResponse(res,status,message,data){
    console.log(data)
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