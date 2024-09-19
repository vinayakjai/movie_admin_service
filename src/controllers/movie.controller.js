const sendResponse = require("../helpers/custom_success.response");
const MovieRepository = require("../repository/movie.repository");
const MovieService = require("../services/movie.service");

const movieService=new MovieService(new MovieRepository)
async function createMovie(req,res,next){
      try{
        const isMovieCreated=req.body;
        if(isMovieCreated){
             sendResponse();
        }
      }catch(error){
        next(error)
      }
}

module.exports={
    createMovie,
}