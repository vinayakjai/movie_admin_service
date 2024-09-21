
class MovieService {
    constructor(repository){
        this.repository=repository;
    }

    async createMovie(movie){
           const isMovieCreated=await this.repository.create(movie);
           return isMovieCreated;
    }

    async updateMovie(movieUpdatedInfo,movieId){
        const isMovieUpdated=await this.repository.update(movieUpdatedInfo,movieId);
        return isMovieUpdated;
    }

    async deleteMovie(movieId){
        const isMovieDeleted=await this.repository.delete(movieId);
        return isMovieDeleted;
    }
}

module.exports=MovieService;