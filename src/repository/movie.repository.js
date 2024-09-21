const { Movie } = require("../models");
class MovieRepository {
  async create(movie) {
    try {
      const isMovieCreated = await Movie.create(movie);
      return isMovieCreated;
    } catch (error) {
      throw error;
    }
  }

  async update(movieUpdatedInfo,movieId) {
    try {
      const isMovieCreated = await Movie.update(movieUpdatedInfo, {
         where: {
           id: movieId,  
         },
       });
      return isMovieCreated;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MovieRepository;
