function removeRxInfo(e) {
	
	$.rxinfo.animate({bottom:-1000, duration:500}, removeView);
}

function removeView(e) {
	
	$.rxinfo.getParent().remove($.rxinfo);
}
