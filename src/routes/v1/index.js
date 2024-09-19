const express=require("express");
const movie_router = require("./movie");
const v1_router=express.Router();
v1_router.use('/movie',movie_router)
module.exports=v1_router;
