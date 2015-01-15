function removeIndications(e) {
	
	$.indications.animate({bottom:-1000, duration:500}, removeView);
}

function removeView(e) {
	
	$.indications.getParent().remove($.indications);
}