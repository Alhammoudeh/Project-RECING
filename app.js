const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',  function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
  const url = "https://api.edamam.com/search";

});

app.listen(3000, function(){
  console.log("Server is connected at Port 3000.");
});
