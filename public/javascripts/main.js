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


	function onlocation(position){
		//console.log(position);
		var pos = position.latlng;
		var computer = L.marker([pos.lat,pos.lng]);
		mymap.addLayer(computer);
		computer.bindPopup("La PC esta aqui").openPopup();
		socket.emit('coords:me', {latlng: pos});
	}

	var launchmentCoords = [21.855147, -102.290729];

	var Sat1 = L.marker(launchmentCoords);
	var Sat2 = L.marker(launchmentCoords);
	var Sat3 = L.marker(launchmentCoords);
	var Sat4 = L.marker(launchmentCoords);
	var Sat5 = L.marker(launchmentCoords);
	var Sat6 = L.marker(launchmentCoords);
	var Sat7 = L.marker(launchmentCoords);
	var Sat8 = L.marker(launchmentCoords);
	var Sat9 = L.marker(launchmentCoords);
	var Sat10 = L.marker(launchmentCoords);
	var Sat12 = L.marker(launchmentCoords);
	var Sat13 = L.marker(launchmentCoords);
	var Sat14 = L.marker(launchmentCoords);
	var Sat15 = L.marker(launchmentCoords);
	var Sat16 = L.marker(launchmentCoords);
	var Sat17 = L.marker(launchmentCoords);
	var Sat18 = L.marker(launchmentCoords);

	mymap.addLayer(Sat1);
	mymap.addLayer(Sat2);
	mymap.addLayer(Sat3);
	mymap.addLayer(Sat4);
	mymap.addLayer(Sat5);
	mymap.addLayer(Sat6);
	mymap.addLayer(Sat7);
	mymap.addLayer(Sat8);
	mymap.addLayer(Sat9);
	mymap.addLayer(Sat10);
	mymap.addLayer(Sat12);
	mymap.addLayer(Sat13);
	mymap.addLayer(Sat14);
	mymap.addLayer(Sat15);
	mymap.addLayer(Sat16);
	mymap.addLayer(Sat17);
	mymap.addLayer(Sat18);

	var positionSat1 = [];
	var positionSat2 = [];
	var positionSat3 = [];
	var positionSat4 = [];
	var positionSat5 = [];
	var positionSat6 = [];
	var positionSat7 = [];
	var positionSat8 = [];
	var positionSat9 = [];
	var positionSat10 = [];
	var positionSat11 = [];
	var positionSat12 = [];
	var positionSat13 = [];
	var positionSat14 = [];
	var positionSat15 = [];
	var positionSat16 = [];
	var positionSat17 = [];
	var positionSat18 = [];
	var positionSat18 = [];


	var gps = L.marker([21.900850, -102.316342]);
	mymap.addLayer(gps);
	var positioni = [];

	socket.on('coords:gps', function (data) {
		console.log(data);
		var pos = data.latlng;

		if(pos.ID == "Sat1")
		{
			Sat1.setLatLng([pos.lat,pos.lng]).update();
			positionSat1.push(data.latlng);
			Sat1.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat1, {color: 'red'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat2")
		{
			Sat2.setLatLng([pos.lat,pos.lng]).update();
			positionSat2.push(data.latlng);
			Sat2.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat2, {color: 'green'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat3")
		{
			Sat3.setLatLng([pos.lat,pos.lng]).update();
			positionSat3.push(data.latlng);
			Sat3.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat3, {color: 'blue'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat4")
		{
			Sat4.setLatLng([pos.lat,pos.lng]).update();
			positionSat4.push(data.latlng);
			Sat4.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat4, {color: 'yellow'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat5")
		{
			Sat5.setLatLng([pos.lat,pos.lng]).update();
			positionSat5.push(data.latlng);
			Sat5.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat5, {color: 'white'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat6")
		{
			Sat6.setLatLng([pos.lat,pos.lng]).update();
			positionSat6.push(data.latlng);
			Sat6.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat6, {color: 'brown'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat7")
		{
			Sat7.setLatLng([pos.lat,pos.lng]).update();
			positionSat7.push(data.latlng);
			Sat7.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat7, {color: 'black'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat8")
		{
			Sat8.setLatLng([pos.lat,pos.lng]).update();
			positionSat8.push(data.latlng);
			Sat8.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat8, {color: 'mustar'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat9")
		{
			Sat9.setLatLng([pos.lat,pos.lng]).update();
			positionSat9.push(data.latlng);
			Sat8.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat9, {color: 'violet'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat10")
		{
			Sat10.setLatLng([pos.lat,pos.lng]).update();
			positionicao1.push(data.latlng);
			Sat10.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat10, {color: 'cyan'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat11")
		{
			Sat11.setLatLng([pos.lat,pos.lng]).update();
			positionSat11.push(data.latlng);
			Sat11.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat11, {color: 'red'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat12")
		{
			Sat12.setLatLng([pos.lat,pos.lng]).update();
			positionSat12.push(data.latlng);
			Sat12.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat12, {color: 'orange'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat13")
		{
			Sat13.setLatLng([pos.lat,pos.lng]).update();
			positionSat13.push(data.latlng);
			Sat13.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat13, {color: 'green'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat14")
		{
			Sat14.setLatLng([pos.lat,pos.lng]).update();
			positionSat14.push(data.latlng);
			Sat14.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat14, {color: 'yellow'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat15")
		{
			Sat15.setLatLng([pos.lat,pos.lng]).update();
			positionSat15.push(data.latlng);
			Sat15.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat15, {color: 'violet'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat16")
		{
			Sat16.setLatLng([pos.lat,pos.lng]).update();
			positionSat16.push(data.latlng);
			Sat16.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat16, {color: 'white'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat17")
		{
			Sat17.setLatLng([pos.lat,pos.lng]).update();
			positionSat17.push(data.latlng);
			Sat17.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat17, {color: 'red'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}
		if(pos.ID == "Sat18")
		{
			Sat18.setLatLng([pos.lat,pos.lng]).update();
			positionSat18.push(data.latlng);
			Sat18.bindPopup(pos.ID).openPopup();
			var polyline = L.polyline(positionSat18, {color: 'pink'}).addTo(mymap);
			mymap.fitBounds(polyline.getBounds());
		}

	});

}

$(document).on('ready',onScript);
		//Lat: 19.210216666666668 Lon: -96.17367333333334
