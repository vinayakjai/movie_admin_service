const { StatusCodes } = require("http-status-codes");
const NotFound = require("../errors/not_found");
const { Movie } = require("../models");
const SequelizeError = require("../errors/sequelize-errors");
class MovieRepository {
  async create(movie) {
    try {
      const isMovieCreated = await Movie.create(movie);
      
      return isMovieCreated;
    } catch (error) {
      throw new SequelizeError(500,error.name,error.errors);
      
    }
  }

  async update(movieUpdatedInfo,movieId) {
    try {
      const isMovieUpdated = await Movie.update(movieUpdatedInfo, {
         where: {
           id: movieId,  
         },
       });
       if(isMovieUpdated==0){
        throw new NotFound(StatusCodes.NOT_FOUND,"NOT_FOUND","Movie you want to update does not exists")
       }
      if(isMovieUpdated==1){
        return isMovieUpdated;
      }
    } catch (error) {
      throw new SequelizeError(500,error.name,error.errors);
    }
  }
  
  async delete(movieId) {
    try {
      const isMovieDeleted = await Movie.destroy( {
         where: {
           id: movieId,  
         },
       });
    
      if(isMovieDeleted==0){
        throw new NotFound(StatusCodes.NOT_FOUND,"NOT_FOUND","Movie you want to delete does not exists")
      }
     
      if(isMovieDeleted==1){
        return isMovieDeleted;
      }
    } catch (error) {
      throw new SequelizeError(500,error.name,error.errors);
    }
  }

  
}

module.exports = MovieRepository;
