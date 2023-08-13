const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');

// dotev configuration for Constants
dotenv.config({path : "./config/config.env"});

// main application
const app = express();
app.use(bodyParser.json());

// all routers
const allRouters = require('./routes/allRoutes');

// port
const port = process.env.PORT;

// mongodb connection
require('./dbconnection')();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET_KEY 
});

app.use(cors());
app.use(allRouters)

app.listen(port, ()=>{
    console.log("Server listening on port", port);
})