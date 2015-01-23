exports.removeOverview = function() {
	
	$.indications.animate({bottom:-1000, duration:500}, removeView);
};

function removeIndications(e) {
	
	removeOverview();
}

function removeView(e) {
	
	$.indications.getParent().remove($.indications);
}