const express=require("express");
const app=express();

const {MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD} = require("./config/config");
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
const mongoose = require('mongoose');

mongoose.connect(
    //"mongodb://root:root@mongo:27017/?authSource=admin"
    MONGO_URL)
    .then(()=>{
        console.log("successfully connected to mongoDB");
        })
    .catch((e)=>{
        console.log("error trying to connect to mongoDB",e);
    })


app.get("/", (req,res)=>{
    res.send("<h1>Hello world using Express and Docker Compose</h1>")
});

const PORT=process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server started at PORT : ${PORT}`);
});


//assignment in task manager take user data