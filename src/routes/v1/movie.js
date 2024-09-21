const express=require("express");
const { createMovie,updateMovie } = require("../../controllers");
const validateUpdatedMovieData = require("../../../validations/update_movie.validaton");
const validateCreateMovieData = require("../../../validations/create_movie.validation");
const movie_router=express.Router();
movie_router.post('/',validateCreateMovieData,createMovie);
movie_router.put('/:id',validateUpdatedMovieData,updateMovie);

module.exports=movie_router;


