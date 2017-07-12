(function constructor(args) {
	$.homewin.open();
})(arguments[0] || {});

function onListViewItemclick(e){
	//try{
		var controllerName = e.itemId.toString();
		$.homewin.openWindow(Alloy.createController(controllerName, {nav: $.homewin}).getView());
	//}catch(e){
	//	console.log("Missing controller: "+ controllerName);
	//}
}
