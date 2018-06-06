require('dotenv').config();
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var server  = require('http').createServer(app);
var io = require('socket.io').listen(server);
var mongoose = require('mongoose');
var schedule = require('node-schedule');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

mongoose.connect('mongodb://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+process.env.DB_NAME);

app.use('/', router);

//Update the statistics once a day
var j = schedule.scheduleJob('42 * * * *', function(){
  console.log('Uppdaterar statistik...');
});

// Emits the number of current visitors
io.on('connection', (client) => {
  client.on('currentVisitors', (interval) => {
    console.log('A wild visitor appeared!', interval);
    setInterval(() => {
      client.emit('counter', io.engine.clientsCount);
    }, interval);
  });

});

module.exports=server;
