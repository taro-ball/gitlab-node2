
var http = require('http')
var os = require('os')
var express = require('express');

var system_obj = [{"hostname":os.hostname(),"OS type":os.type()}];
var system_info = JSON.stringify(system_obj) + [{"free mem":os.freemem(),"load avg":os.loadavg()}];

const port = process.env.JSPORT || "3000";
const head='<html><body bgcolor="#222530" text="#22CC22"><style>body { font-family: Arial, Helvetica, sans-serif; font-size: x-large;}</style><h1>Здравствуйте!你好！ Hello World!</h1> '
const butt= "Another merge test!..<br><a href='/error'>try error</a><br><a href='/api/system'>try System api</a></body></html>"

var app = express();
var server = http.createServer(app).listen(port);
var host = server.address().address;

app.get('/', (req, res) => {
  var currentDate = new Date();
  var user_agent = req.get('user-agent')
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var content = `${currentDate} <br> ${ip} - ${user_agent}<br> `
  res.status(200).send(`${head} ${content} <h2>${system_info}</h2> ${butt}`);
  console.log(`${currentDate} - ${ip} - ${user_agent}`)
});

app.get('/error', (req, res) => {
  throw new Error('lazers offline');
});

app.get('/api/system', (req, res) => {
  return res.status(200).send(system_obj);
});

console.log(system_info);
console.log('Example app listening at http://%s:%s', host, port);
