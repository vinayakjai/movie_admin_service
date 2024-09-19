const {Movie} =require("../models")
class MovieRepository{
       async create(movie){
             try{
                //const isMovieCreated=await Movie.create(movie);
             }catch(error){
                throw error
             }
       }
}

module.exports =MovieRepository