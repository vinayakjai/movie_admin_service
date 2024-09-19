const { StatusCodes } = require("http-status-codes");
const movieSchema = require("../zod/movie_schema");

function validateMovieObject(req,res,next){
   try{
    movieSchema.parse(req.body);
    next();
   }catch(error){
    const errorReason = error.errors.map(err => err.message);
    //console.log("Validation failed with the following errors:", errorReason);
    return res.status(StatusCodes.BAD_REQUEST).json({
        success:false,
        data:null,
        error:errorReason,
        errorMessage:"provided movie data is not valid"
    })
   }
    
    
}

module.exports=validateMovieObject;