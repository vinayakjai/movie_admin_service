const {Movie} =require("../models")
class MovieRepository{
       async create(movie){
             
             try{
                const isMovieCreated=await Movie.create(movie);
                return isMovieCreated.dataValues;
             }catch(error){
                throw error
             }
       }
}

module.exports =MovieRepository