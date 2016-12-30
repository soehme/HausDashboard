jQuery(document).ready(function(){
	//viewInFullScreen();
	
	readRSSUsingerAnzeiger();
	
});

/*  $(window).resize(function(e) {
        $frame.sly('reload');
  });*/

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
/*	jQuery(function($){
		'use strict';
		// -------------------------------------------------------------
		//   Force Centered Navigation
		// -------------------------------------------------------------
		(function () {
			var $frame = $('#frame');
			var $wrap  = $frame.parent();

			// Call Sly on frame
			$frame.sly({
				horizontal: 1,
				itemNav: 'forceCentered',
				smart: 1,
				activateMiddle: 1,
				activateOn: 'click',
				mouseDragging: 1,
				touchDragging: 1,
				releaseSwing: 1,
				startAt: 0,
				scrollBar: $wrap.find('.scrollbar'),
				scrollBy: 1,
				speed: 300,
				elasticBounds: 1,
				easing: 'easeOutExpo',
				dragHandle: 1,
				dynamicHandle: 1,
				clickBar: 1
			});
		}());
	});

*/