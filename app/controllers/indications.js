function removeIndications(e) {
	
	$.indications.animate({bottom:-1000, duration:500}, removeView);
}

function removeView(e) {
	
	parent.remove($.indications);
}

var args = arguments[0] || {};
var parent = args.parent;