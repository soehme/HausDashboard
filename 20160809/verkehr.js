
// Überblick von Usingen bis Frankfurt -> für A5
var myLatlng1 = {lat: 50.219105, lng: 8.6124057};
var myZoom1 = 11;
// Usingen-Köppern & Usingen-Bad Homburg
var myLatlng2 = {lat: 50.2708036, lng: 8.5997309};
var myZoom2 = 12;
//Eschborn
var myLatlng3 = {lat: 50.1247152, lng: 8.5849698};
var myZoom3 = 14;


var map1;

function initMap() {
	map1 = new google.maps.Map(document.getElementById('map1'), {
		zoom: myZoom1,
		center: myLatlng1,
		disableDefaultUI: true
	});

	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(map1);
}
      
function setToPosition1() {
	map1.panTo(myLatlng1);
	map1.setZoom(myZoom1);
}
	
function setToPosition2() {
	map1.panTo(myLatlng2);
	map1.setZoom(myZoom2);
}
	
function setToPosition3() {
	map1.panTo(myLatlng3);
	map1.setZoom(myZoom3);
}