function onScript(){

	var socket = io.connect(window.location.href);


	var mymap = L.map('mimapa',{
		 center: [21.900850, -102.316342]
		,zoom:16
	});

	tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; 2016 OpenStreetMap contributors, Sacitec &copy; 2016 Electronic Cats',
		key: 'BC9A493B41014CAABB98F0471D759707'

	});

	mymap.addLayer(tiles);

	mymap.locate({
		enableHighAccuracy: true
	});

	mymap.on('locationfound', onlocation);

	socket.on('coords:user', onRecive);

	function onRecive(data){
		console.log(data);
		var pos = data.latlng;
		var computer = L.marker([pos.lat,pos.lng]);
		mymap.addLayer(computer);
		computer.bindPopup("Usuarios aqui");
	}

	var gageCO2 = 0;
	var gageTVOC = 0;
	var gageTemp = 0;
	var gagePress = 0;
	var gageALT = 0;
	var gageHum = 0;
	var gageVolt = 0;
	var gageSSID = 0;

	socket.on('datos:sensors', function (data) {
		console.log(data);
		var sen = data.sensores;

		gageCO2 = sen.co2
		gageTVOC = sen.tvoc
		gageTemp = sen.temp;
		gagePress = sen.press;
		gageALT = sen.alt; 
		gageHum	= sen.hume;
		gageVolt = sen.volt;
		gageSSID = sen.ssid;

		CO2.refresh(gageCO2);
		TVOC.refresh(gageTVOC);
		Temperatura.refresh(gageTemp);
		Presion.refresh(gagePress);
		Altitud.refresh(gageALT);
		Humedad.refresh(gageHum);
		Voltaje.refresh(gageVolt);
		SSID.refresh(gageSSID);

	});

	function onlocation(position){
		//console.log(position);
		var pos = position.latlng;
		var computer = L.marker([pos.lat,pos.lng]);
		mymap.addLayer(computer);
		computer.bindPopup("La PC esta aqui").openPopup();
		socket.emit('coords:me', {latlng: pos});

	}

	var gps = L.marker([21.900850, -102.316342]);
	mymap.addLayer(gps);
	var posizioni = [];

	socket.on('coords:gps', function (data) {
		console.log(data);
		var pos = data.latlng;
		gps.setLatLng([pos.lat,pos.lng]).update();
		posizioni.push(data.latlng);
		gps.bindPopup( "CatSat").openPopup();
		var polyline = L.polyline(posizioni, {color: 'red'}).addTo(mymap);
		mymap.fitBounds(polyline.getBounds());

	});

	var CO2 = new JustGage({
		id: "gaugeCO2",
		value: gageCO2,
		min: -60,
		max: 90,
		title: "Co2"
	});

	var TVOC = new JustGage({
		id: "gaugeTVOC",
		value: gageTVOC,
		min: -60,
		max: 90,
		title: "TVOC"
	});

	var Temperatura = new JustGage({
		id: "gaugeTEMP",
		value: gageTemp,
		min: -60,
		max: 90,
		title: "Temperatura"
	});

	var Presion = new JustGage({
		id: "gaugePres",
		value: gagePress,
		min: 250,
		max: 1100,
		title: "Presion"
 	});

	 var Altitud = new JustGage({
		id: "gaugeAlt",
		value: gageALT,
		min: 0,
		max: 40000,
		title: "Altura"
	 });
	 
	var Humedad = new JustGage({
		id: "gaugeHUM",
		value: gageHum,
		min: 0,
		max: 100,
		title: "Humedad"
  	});

	var Voltaje = new JustGage({
		id: "gaugeVolt",
		value: gageVolt,
		min: 0,
		max: 3,
		title: "Temperatura 2"
	});

	var SSID = new JustGage({
		id: "gaugeSSID",
		value: gageSSID,
		min: -130,
		max: -20,
		title: "SSID"
 	});

}

$(document).on('ready',onScript);
		//Lat: 19.210216666666668 Lon: -96.17367333333334
