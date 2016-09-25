$(document).ready(init);

function init()
{

	var map = L.map('map').setView([12.632233, -7.990599], 13);
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
	var orange = L.ExtraMarkers.icon({
	    icon: 'fa-bicycle',
	    markerColor: 'orange-dark',
	    shape: 'penta',
	    prefix: 'fa'
	  });
	var marker = L.marker([12.628394, -8.020069], {icon: orange}).addTo(map).bindPopup('<h3>SHELL ACI 2000</h3>');
	var marker = L.marker([12.642108, -8.020721], {icon: orange}).addTo(map).bindPopup('<h3>SHELL</h3>');
	var marker = L.marker([12.638782, -8.034439], {icon: orange}).addTo(map).bindPopup('<h3>SHELL LAFIABOUGOU</h3>');
	var marker = L.marker([12.637871, -7.996581], {icon: orange}).addTo(map).bindPopup('<h3>SHELL FLEUVE</h3>');
	var marker = L.marker([12.651300, -7.990863], {icon: orange}).addTo(map).bindPopup('<h3>SHELL ALQOODS</h3>');
	var marker = L.marker([12.582295, -8.023789], {icon: orange}).addTo(map).bindPopup('<h3>SHELL KALABAN CORO</h3>');
	var marker = L.marker([12.615162, -7.977907], {icon: orange}).addTo(map).bindPopup('<h3>SHELL BADALA</h3>');
	var marker = L.marker([12.659024, -7.987794], {icon: orange}).addTo(map).bindPopup('<h3>SHELL OMNISPORTS</h3>');
	var marker = L.marker([12.648030, -7.978350], {icon: orange}).addTo(map).bindPopup('<h3>SHELL SOTUBA</h3>');
	var marker = L.marker([12.588410, -7.977319], {icon: orange}).addTo(map).bindPopup('<h3>SHELL NIAMAKORO</h3>');
	var marker = L.marker([12.607223, -7.960493], {icon: orange}).addTo(map).bindPopup('<h3>SHELL MAGNAMBOUGOU</h3>');
	var marker = L.marker([12.621773, -7.920226], {icon: orange}).addTo(map).bindPopup('<h3>SHELL MISSABOUGOU</h3>');
	var marker = L.marker([12.586043, -7.943112], {icon: orange}).addTo(map).bindPopup('<h3>SHELL FALADIE</h3>');
	var marker = L.marker([12.662944, -7.947620], {icon: orange}).addTo(map).bindPopup('<h3>SHELL DJELIBOUGOU</h3>');
}