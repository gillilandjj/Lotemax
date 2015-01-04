function doClick(e) {
    alert($.label.text);
}

function doClickRisk(e) {

	$.index.add(indications.getView());
	indications.getView().bottom = -1000;
    indications.getView().animate({bottom:"10%", duration:500});
}

function doClickRx(e) {
	alert("Rx");
}

function doClickRef(e) {
	alert("Ref");
}

$.index.open();

var indications = Alloy.createController('indications', {
	parent: $.index
});