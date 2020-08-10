//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.send('Hello Mates!\n'+fullUrl);
  console.log('Received request for URL: ' + fullUrl);
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('App listening on port 8080!')
})
