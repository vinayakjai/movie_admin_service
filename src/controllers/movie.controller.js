const sendResponse = require("../helpers/custom_success_response.js");
const MovieRepository = require("../repository/movie.repository");
const MovieService = require("../services/movie.service");
const { StatusCodes } = require("http-status-codes");

const movieService = new MovieService(new MovieRepository());
async function createMovie(req, res, next) {
  console.log("create movie");
  try {
    const movie = req.body; //do validation

    const isMovieCreated = await movieService.createMovie(movie);

    if (isMovieCreated) {
      sendResponse(
        res,
        StatusCodes.CREATED,
        "movie created successfully!",
        isMovieCreated
      ); //response_object,STATUS,MESSAGE,DATA
    }
  } catch (error) {
    next(error);
  }
}

async function updateMovie(req, res, next) {
  try {
   
    const movieId=req.params.id;
    
    const isMovieUpdated = await movieService.updateMovie(req.body,movieId);

    if (isMovieUpdated) {
      sendResponse(
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

module.exports = {
  createMovie,
  updateMovie,
};
