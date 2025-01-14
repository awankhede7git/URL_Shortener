const express = require('express');
const urlRoute = require('./routes/url');
const mongoose = require('mongoose');
const {ConnectToMongodb} = require('./connect');

const app = express();
const PORT = 8001;

app.use(express.json());

ConnectToMongodb('mongodb://127.0.0.1:27017/url_short')
.then(console.log('Connected to monodb!'));

app.use("/url", urlRoute);


app.listen(PORT, ()=>{
    console.log("Server is running <3");
}); 