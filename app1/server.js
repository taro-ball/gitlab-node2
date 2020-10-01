
var http = require('http')
var os = require('os')
var express = require('express');

var system_obj = [{"hostname":os.hostname(),"OS type":os.type()}];
var load_obj = [{"free mem":os.freemem(),"load avg":os.loadavg()}];
var system_info = JSON.stringify(system_obj);

const port = process.env.JSPORT || "3000";
const head='<html><body bgcolor="#222530" text="#22CC22"><style>body { font-family: Arial, Helvetica, sans-serif; font-size: x-large;}</style><h1>Здравствуйте!你好！ Hello World!</h1> '
const butt= "Another merge test!..<br><a href='/error'>try error</a><br><a href='/api'>try System api</a></body></html>"

var app = express();
var server = http.createServer(app).listen(port);
var host = server.address().address;
module.exports = server;

app.get('/', (req, res) => {
  var currentDate = new Date().toISOString();
  var user_agent = req.get('user-agent')
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var url = req.url;
  var content = `${currentDate} <br> ${ip} - ${user_agent}<br> `
  res.status(200).send(`${head} ${content} <h2>${system_info}</h2> ${butt}`);
  console.log(`${currentDate} - ${url} - ${ip} - ${user_agent}`)
});

app.get('/error', (req, res) => {
  var currentDate = new Date().toISOString();
  var url = req.url;
  console.log(`${currentDate} - ${url}`)
  throw new Error('lazers offline');
});

app.get('/api', (req, res) => {
  var currentDate = new Date().toISOString();
  var url = req.url;
  console.log(`${currentDate} - ${url}`)
  return res.status(200).send(system_obj);
});

console.log(system_info);
console.log('Example app listening at http://%s:%s', host, port);
