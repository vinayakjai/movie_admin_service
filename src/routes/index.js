const express=require("express");
const v1_router = require("./v1");
const api_router=express.Router();

api_router.use(v1_router);
module.exports=api_router;
