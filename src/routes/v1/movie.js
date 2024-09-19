const express=require("express");
const { createMovie } = require("../../controllers");
const validateMovieObject = require("../../validations/movie.validator");
const movie_router=express.Router();
movie_router.post('/',validateMovieObject,createMovie)

module.exports=movie_router;


