var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
const fs = require('fs');

var math = require('mathjs');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var serialport = require('serialport')
var math = require('mathjs')

var stringParse = function(recvString){
var items = recvString.split(',');
	return {
    //ID,CO2,TVOC,TEMP,PRESS,ALT,HUM,VOLT,LAT,LONG,SSID
		 ID:  items[0]
		,co2: items[1]
		,tvoc: items[2]
    ,temp: items[3]
		,pres: items[4]
		,alt: items[5]
		,hum: items[6]
		,volt: items[7]
		,lat: items[8]
		,lon: items[9]
		,ssid: items[10]
	}
}

var port = new serialport('/dev/cu.usbserial-A9M9DV3R', {
//var port = new serialport('COM20', {
	 baudrate: 9600
	,parser: serialport.parsers.readline('\n')
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);


io.sockets.on('connection', function(socket){
	socket.on('coords:me', function(data){
		console.log(data);
		socket.broadcast.emit('coords:user', data);
	});

	port.on('data', function(line){
      var today = new Date();
      var payload = stringParse(line);
			var pos = {
				 lat: payload.lat,
         lng: payload.lon
			};
      //CO2,TVOC,TEMP,PRESS,ALT,HUM,VOLT
      var sen = {
        co2: payload.co2,
        tvoc: payload.tvoc,
        temp: payload.temp,
        press: payload.pres,
        alt: payload.alt,
        hume: payload.hum,
        batt: payload.volt,
        ssid: payload.ssid  
			};

    console.log(payload);
		socket.emit('coords:gps', {
				 latlng: pos
			}); //Envia informacion de coordenadas a frontend

    socket.emit('datos:sensors', {
          sensores: sen
      }); //Envia informacion de sensores a frontend

    fs.open('info.txt', 'wx', (err, fd) => {
      if (err) {
        if (err.code === "EEXIST") {
          fs.appendFile('info.txt', '\n'+ today + line, (err) => {
            if (err) throw err;
            console.log('String agregada');
          });
          return;
        } else {
    throw err;
  }
  }
  fs.writeFile('info.txt', today + line, (err) => {
    if (err) throw err;
    console.log('String guardado');
      });//write file
    });
	}); //Port receive function end

});


server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
