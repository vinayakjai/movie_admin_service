const { StatusCodes } = require("http-status-codes");
const movieSchema = require("../src/zod/movie_schema");

function validateCreateMovieData(req,res,next){
    try{
       const isSchemaCorrect= movieSchema.parse(req.body);
       if(isSchemaCorrect){
        next();
       }

    }catch(error){
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            data:null,
            message:"provided movie data is invalid",
            error
        })
    }
}

module.exports=validateCreateMovieData;