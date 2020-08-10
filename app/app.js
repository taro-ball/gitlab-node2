var express = require('express');
var http = require('http')
var os = require('os')
var app = express();

const port = process.env.JSPORT || "8080";
const head='<html><body bgcolor="#222530" text="#22CC22"><style>body { font-family: Arial, Helvetica, sans-serif; font-size: x-large;}</style><h1>Здравствуйте!你好！</h1> '
const butt="</body></html>"
system_info= 'hostname: '+os.hostname()+" / os: "+os.type()

server = http.createServer(app).listen(port);
var host = server.address().address;

app.get('/', function (req, res) {
  currentDate = new Date();
  user_agent = req.get('user-agent')
  ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  content = `${currentDate} <br> ${ip} - ${user_agent}<br> `
  res.send(`${head} ${content} <h2>${system_info}</h2> ${butt}`);
  console.log(`${currentDate} - ${ip} - ${user_agent}`)
});

console.log(system_info);
console.log('Example app listening at http://%s:%s', host, port);
