
class MovieService {
    constructor(repository){
        this.repository=repository;
    }

    async createMovie(movie){
           const isMovieCreated=await this.repository.create(movie);
           return isMovieCreated;
    }
}

module.exports=MovieService;