const express=require("express");
const { PORT } = require("./helpers/server_configuration");
const bodyParser=require("body-parser");
const api_router = require("./routes");

const app=express();
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(api_router);
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})