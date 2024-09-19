const sendResponse = require("../helpers/custom_success_response.js");
const MovieRepository = require("../repository/movie.repository");
const MovieService = require("../services/movie.service");
const {StatusCodes}=require("http-status-codes")

const movieService=new MovieService(new MovieRepository)
async function createMovie(req,res,next){
   console.log("create movie")
      try{
        const movie=req.body;//do validation
        console.log(movie)
        const isMovieCreated=await movieService.createMovie(movie);

        if(!isMovieCreated){
             sendResponse(res,StatusCodes.CREATED,"movie created successfully!","kwd");//response_object,STATUS,MESSAGE,DATA
        }
      }catch(error){
        
        next(error)
      }
}

module.exports={
    createMovie,
}