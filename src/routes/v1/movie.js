const express=require("express");
const { createMovie } = require("../../controllers");
const movie_router=express.Router();
movie_router.post('/',createMovie)

module.exports=movie_router;


