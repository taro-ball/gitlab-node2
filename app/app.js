var express = require('express');
var http = require('http')
var os = require('os')
var app = express();

const port = process.env.JSPORT || "3000";
const head='<html><body bgcolor="#222530" text="#22CC22"><style>body { font-family: Arial, Helvetica, sans-serif; font-size: x-large;}</style><h1>Здравствуйте!你好！ Hello World!</h1> '
const butt= " <br><a href='/error'>try error</a><br><a href='/api/cpus'>try api</a></body></html>"
system_info= [{"hostname":os.hostname(),"type":os.type()}]

server = http.createServer(app).listen(port);
var host = server.address().address;

app.get('/', function (req, res) {
  currentDate = new Date();
  user_agent = req.get('user-agent')
  ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  content = `${currentDate} <br> ${ip} - ${user_agent}<br> `
  res.status(200).send(`${head} ${content} <h2>${system_info}</h2> ${butt}`);
  console.log(`${currentDate} - ${ip} - ${user_agent}`)
});

app.get('/error', function (req, res) {
  var err = new Error('lazers offline');
  throw err
  //try {throw err;}
  //catch (e) {console.log("=====cought======="+e)}
});

app.get('/api/cpus', (req, res) => {
  return res.send(os.cpus());
});


console.log(system_info);
console.log('Example app listening at http://%s:%s', host, port);
