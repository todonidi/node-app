//importing node framework
var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello world testing edit');
});//listen to port 5000 by default
app.listen(process.env.PORT || 5000);
 
module.exports = app;
