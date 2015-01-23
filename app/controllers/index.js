function removeChildren() {
	// Pop all windows to the home screen
	if ($.index.children) {
		for (var c = $.index.children.length - 1; c >= 0; c--) {		
			if ($.index.children[c] !== undefined) {
				if ($.index.children[c].className === "overview") {
					//$.index.remove($.index.children[c]);
					Ti.API.log('Removing ' + $.index.children[c].name);
					$.index.children[c].removeOverview();
				}
			}
		}
	}
}

function doClickHome(e) {
	removeChildren();
}

function doClickInflammation(e) {
	
}

function doClickDose(e) {
	
}

function doClickViscosity(e) {
	
}

function doClickFormulation(e) {
	
}

function doClickVideos(e) {
	
}

function doClickRisk(e) {

	removeChildren();
	$.index.add($.indications.getView());
	$.indications.getView().bottom = -1000;
	$.indications.getView().animate({bottom:"10%", duration:500});
}

function doClickRx(e) {
	
	removeChildren();
	$.index.add($.rxinfo.getView());
	$.rxinfo.getView().bottom = -1000;
	$.rxinfo.getView().animate({bottom:"10%", duration:500});
}

function doClickRef(e) {
	
	removeChildren();
	alert("Ref");
}

$.index.open();