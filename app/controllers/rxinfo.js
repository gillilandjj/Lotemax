function removeRxInfo(e) {
	
	$.rxinfo.animate({bottom:-1000, duration:500}, removeView);
}

function removeView(e) {
	
	parent.remove($.rxinfo);
}

var args = arguments[0] || {};
var parent = args.parent;