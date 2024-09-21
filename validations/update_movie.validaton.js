const { StatusCodes } = require("http-status-codes");
const sendErrorResponse = require("../src/helpers/custom_error_response");
const updateMovieSchema = require("../src/zod/update_movie_schema");
const NotFound = require("../src/errors/not_found");

function validateUpdatedMovieData(req,res,next){
    try{
        const movieId=req.params.id;
        if(!movieId){
            sendErrorResponse(res,StatusCodes.BAD_REQUEST,"movie id is not provided in params","params doesn't contains movie id");
        }
        const isMovieInfoCorrect=updateMovieSchema.parse(req.body);
        if(isMovieInfoCorrect){
            next()
        }
        

    }catch(error){
        sendErrorResponse(res,StatusCodes.BAD_REQUEST,"provided updated movie data is invalid",error)//res,errorMessage,error
    }
}

module.exports=validateUpdatedMovieData;