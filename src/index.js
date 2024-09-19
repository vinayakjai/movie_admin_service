const express=require("express");
const { PORT } = require("./helpers/server_configuration");
const app=express();
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})