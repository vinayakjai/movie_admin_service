const sendSuccessResponse = require("../helpers/custom_success_response.js");
const MovieRepository = require("../repository/movie.repository");
const MovieService = require("../services/movie.service");
const { StatusCodes } = require("http-status-codes");

const movieService = new MovieService(new MovieRepository());
async function createMovie(req, res, next) {
  console.log("create movie");
  try {
    const movie = req.body; //do validation

    const isMovieCreated = await movieService.createMovie(movie);

     console.log(isMovieCreated)
     if(!isMovieCreated){
     return  res.status(500).json({
        message:"unable to create movie",
      })
     }
      sendSuccessResponse(
        res,
        StatusCodes.CREATED,
        "movie created successfully!",
        isMovieCreated
      ); //response_object,STATUS,MESSAGE,DATA
    
  } catch (error) {
    console.log("controller error",error)
    next(error);
  }
}

async function updateMovie(req, res, next) {
  try {
   
    const movieId=req.params.id;
    
    const isMovieUpdated = await movieService.updateMovie(req.body,movieId);

    if (isMovieUpdated) {
      sendSuccessResponse(
        res,
        StatusCodes.CREATED,
        "movie updated successfully!",
        isMovieUpdated
      ); //response_object,STATUS,MESSAGE,DATA
    }
  } catch (error) {
    next(error);
  }
}

async function deleteMovie(req,res,next){
  try{
    const movieId=req.params.id;
    
    const isMovieDeleted=await movieService.deleteMovie(movieId);
    console.log("in controller",isMovieDeleted)
    if(isMovieDeleted){
      sendSuccessResponse(res,200,"movie deleted successfully",isMovieDeleted);
     
    }
  
   
  }catch(error){
    next(error);
  }
}

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie
};
