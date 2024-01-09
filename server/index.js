require("dotenv").config();
const express =require("express");
const app=express();
const cors=require("cors");
const port=5000;
require("./Db/connection");
const DefaultData=require('./defaultdata');
const router = require("./routes/router");

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});

DefaultData();