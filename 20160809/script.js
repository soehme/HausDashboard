jQuery(document).ready(function(){
	//$("h1").text("myDailyDashboard live");
	
	//var button = document.getElementById('fullscreenbutton');
	//button.addEventListener("click",viewInFullScreen());
	
	// why is this not working??
	//viewInFullScreen();
	
	readRSSUsingerAnzeiger();
});

function viewInFullScreen() {
	var element = document.getElementsByTagName("body")[0];
	//= document.getElementById("map1");
	if (element.requestFullScreen) {
		element.requestFullScreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen();
	}
}

function readRSSUsingerAnzeiger() {
    $('#rss-usinger-anzeiger').FeedEk({  
        FeedUrl: 'http://www.usinger-anzeiger.de/lokales/index.rss',
	MaxCount: 10,
	ShowDesc: true,
	ShowPubDate:true,
	TitleLinkTarget:'_blank',
	DateFormat: 'DD.MM.YYYY HH:mm',
	DescCharacterLimit: 100
    });     
}

//refresh tobedone:
//google.maps.event.trigger(map, 'resize');