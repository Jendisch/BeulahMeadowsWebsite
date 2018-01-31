function initMap() {
	var myLatLng = { lat: 43.015066, lng: -88.695052 };

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 9,
		center: myLatLng
	});

	var ltlng = [];

	ltlng.push(new google.maps.LatLng(43.111, -88.499));
	ltlng.push(new google.maps.LatLng(42.967, -88.370));
	ltlng.push(new google.maps.LatLng(42.842, -88.344));
	ltlng.push(new google.maps.LatLng(42.531, -88.594));
	ltlng.push(new google.maps.LatLng(43.423, -88.184));
	ltlng.push(new google.maps.LatLng(43.108, -88.346));
	ltlng.push(new google.maps.LatLng(43.061, -87.989));
	ltlng.push(new google.maps.LatLng(43.311, -88.173));
	ltlng.push(new google.maps.LatLng(42.929, -88.115));
	ltlng.push(new google.maps.LatLng(42.654, -88.406));
	ltlng.push(new google.maps.LatLng(43.002, -89.532));

	var title = [];

	title.push("La Belle Legacy");
	title.push("This N That Craft Mill");
	title.push("Zden's Artwork");
	title.push("Angelus Home & Garden");
	title.push("A Conversation Piece");
	title.push("Mame's Antique Shoppe");
	title.push("Cattywampus Design ");
	title.push("Lamm Gardens");
	title.push("The Gingerbread House");
	title.push("Northwind Perennial Farm");
	title.push("JNJ Craftworks");

	var address = [];

	address.push('<div id="content">' +
		'<div id="siteNotice">' + '</div>' +
		'<h3 id="firstHeading" class="firstHeading">La Belle Legacy</h3>' +
		'<div id="bodyContent">' + '<p>La Belle Legacy </p>' +
		'<p>105 W. Wisconsin Avenue</p> ' +
		'<p>Oconomowoc, WI 53066 </p>' + '</div>' + '</div>');
	address.push('<div id="content">' +
		'<div id="siteNotice">' + '</div>' +
		'<h3 id="firstHeading" class="firstHeading">This N That Craft Mill</h3>' +
		'<div id="bodyContent">' + '<p>This N That Craft Mill</p> ' +
		'<p>S42 W31254 Hwy 83 </p>' +
		'<p>Genesee Depot, WI 53127 </p>' + '</div>' + '</div>');
	address.push('<div id="content">' +
		'<div id="siteNotice">' + '</div>' +
		'<h3 id="firstHeading" class="firstHeading">Zden\'s Artwork</h3>' +
		'<div id="bodyContent">' + '<p>Zden\'s Artwork</p> ' +
		'<p>1541 Main Street </p>' +
		'<p>Mukwonago, WI 53149 </p>' + '</div>' + '</div>');
	address.push('<div id="content">' +
		'<div id="siteNotice">' + '</div>' +
		'<h3 id="firstHeading" class="firstHeading">Angelus Home & Garden</h3>' +
		'<div id="bodyContent">' + '<p>ZAngelus Home & Garden</p>' +
		'<p>325 Kenosha St. Hwy 67</p>' +
		'<p>Walworth WI 53184 </p>' + '</div>' + '</div>');
	address.push('<div id="content">' +
		'<div id="siteNotice">' + '</div>' +
		'<h3 id="firstHeading" class="firstHeading">A Conversation Piece</h3>' +
		'<div id="bodyContent">' + '<p>A Conversation Piece </p>' +
		'<p>132 S 6th Avenue </p>' +
		'<p>West Bend, WI 53095 </p>' + '</div>' + '</div>');
	address.push('<div id="content">' +
		'<div id="siteNotice">' + '</div>' +
		'<h3 id="firstHeading" class="firstHeading">Mame\'s Antique Shoppe</h3>' +
		'<div id="bodyContent">' + '<p>Mame\'s Antique Shoppe </p>' +
		'<p>282 North Ave </p>' +
		'<p>Hartland, WI 53029 </p>' + '</div>' + '</div>');
	address.push('<div id="content">' +
		'<div id="siteNotice">' + '</div>' +
		'<h3 id="firstHeading" class="firstHeading">Cattywampus Design</h3>' +
		'<div id="bodyContent">' + '<p>Cattywampus Design </p>' +
		'<p>6123 W North Avenue </p>' +
		'<p>Wauwatosa, WI 53213 </p>' + '</div>' + '</div>');
	address.push('<div id="content">' +
		'<div id="siteNotice">' + '</div>' +
		'<h3 id="firstHeading" class="firstHeading">Lamm Gardens</h3>' +
		'<div id="bodyContent">' + '<p>Lamm Gardens </p>' +
		'<p>2708 Sherman Road </p>' +
		'<p>Jackson, WI 53037 </p>' + '</div>' + '</div>');
	address.push('<div id="content">' +
		'<div id="siteNotice">' + '</div>' +
		'<h3 id="firstHeading" class="firstHeading">The Gingerbread House</h3>' +
		'<div id="bodyContent">' + '<p>The Gingerbread House </p>' +
		'<p>S63 W16147 College Avenue </p>' +
		'<p>Muskego, WI 53150 </p>' + '</div>' + '</div>');
	address.push('<div id="content">' +
		'<div id="siteNotice">' + '</div>' +
		'<h3 id="firstHeading" class="firstHeading">Northwind Perennial Farm</h3>' +
		'<div id="bodyContent">' + '<p>Northwind Perennial Farm </p>' +
		'<p>7047 Hospital Road </p>' +
		'<p>Burlington, WI 53105 </p>' + '</div>' + '</div>');
	address.push('<div id="content">' +
		'<div id="siteNotice">' + '</div>' +
		'<h3 id="firstHeading" class="firstHeading">JNJ Craftworks</h3>' +
		'<div id="bodyContent">' + '<p>JNJ Craftworks </p>' +
		'<p>1051 N Edge Trail </p>' +
		'<p>Verona, WI 53593 </p>' + '</div>' + '</div>');


	var marker0 = new google.maps.Marker({
		position: ltlng[0],
		map: map,
		title: title[0]
	});
	var infowindow0 = new google.maps.InfoWindow({
		content: address[0]
	});
	marker0.addListener('click', function () {
		infowindow0.open(map, marker0);
	});

	var marker1 = new google.maps.Marker({
		position: ltlng[1],
		map: map,
		title: title[1]
	});
	var infowindow1 = new google.maps.InfoWindow({
		content: address[1]
	});
	marker1.addListener('click', function () {
		infowindow1.open(map, marker1);
	});

	var marker2 = new google.maps.Marker({
		position: ltlng[2],
		map: map,
		title: title[2]
	});
	var infowindow2 = new google.maps.InfoWindow({
		content: address[2]
	});
	marker2.addListener('click', function () {
		infowindow2.open(map, marker2);
	});

	var marker3 = new google.maps.Marker({
		position: ltlng[3],
		map: map,
		title: title[3]
	});
	var infowindow3 = new google.maps.InfoWindow({
		content: address[3]
	});
	marker3.addListener('click', function () {
		infowindow3.open(map, marker3);
	});

	var marker4 = new google.maps.Marker({
		position: ltlng[4],
		map: map,
		title: title[4]
	});
	var infowindow4 = new google.maps.InfoWindow({
		content: address[4]
	});
	marker4.addListener('click', function () {
		infowindow4.open(map, marker4);
	});

	var marker5 = new google.maps.Marker({
		position: ltlng[5],
		map: map,
		title: title[5]
	});
	var infowindow5 = new google.maps.InfoWindow({
		content: address[5]
	});
	marker5.addListener('click', function () {
		infowindow5.open(map, marker5);
	});

	var marker6 = new google.maps.Marker({
		position: ltlng[6],
		map: map,
		title: title[6]
	});
	var infowindow6 = new google.maps.InfoWindow({
		content: address[6]
	});
	marker6.addListener('click', function () {
		infowindow6.open(map, marker6);
	});

	var marker7 = new google.maps.Marker({
		position: ltlng[7],
		map: map,
		title: title[7]
	});
	var infowindow7 = new google.maps.InfoWindow({
		content: address[7]
	});
	marker7.addListener('click', function () {
		infowindow7.open(map, marker7);
	});

	var marker8 = new google.maps.Marker({
		position: ltlng[8],
		map: map,
		title: title[8]
	});
	var infowindow8 = new google.maps.InfoWindow({
		content: address[8]
	});
	marker8.addListener('click', function () {
		infowindow8.open(map, marker8);
	});

	var marker9 = new google.maps.Marker({
		position: ltlng[9],
		map: map,
		title: title[9]
	});
	var infowindow9 = new google.maps.InfoWindow({
		content: address[9]
	});
	marker9.addListener('click', function () {
		infowindow9.open(map, marker9);
	});

	var marker10 = new google.maps.Marker({
		position: ltlng[10],
		map: map,
		title: title[10]
	});
	var infowindow10 = new google.maps.InfoWindow({
		content: address[10]
	});
	marker10.addListener('click', function () {
		infowindow10.open(map, marker10);
	});
}

function hideAllInfoWindows(map) {
   marker0.infowindow0.close(map, marker0);
   marker1.infowindow1.close(map, marker1);
   marker2.infowindow2.close(map, marker2);
   marker3.infowindow3.close(map, marker3);
   marker4.infowindow4.close(map, marker4);
   marker5.infowindow5.close(map, marker5);
   marker6.infowindow6.close(map, marker6);
   marker7.infowindow7.close(map, marker7);
   marker8.infowindow8.close(map, marker8);
   marker9.infowindow9.close(map, marker9);
   marker10.infowindow10.close(map, marker10);
 }