exports.removeOverview = function() {
	
	$.rxinfo.animate({bottom:-1000, duration:500}, removeView);
};

function removeRxInfo(e) {
	
	removeOverview();
}

function removeView(e) {
	
	$.rxinfo.getParent().remove($.rxinfo);
}
