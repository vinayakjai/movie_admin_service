const catchAsyncError = require("../middlewares/catch_async_errors");

const createMovie=catchAsyncError(async (req,res,next)=>{
    res.send("create movie");
})

module.exports={
    createMovie,
}