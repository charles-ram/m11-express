const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoute = require('./route/api-route');
const htmlRoute = require('./routes/html-route');

// Listens for any incoming data
app.use(express.static('public'));
// Parses incoming request bodies that are submitted
app.use(exprees.urlencoded({extended: true}));
// 
