var labels_values;
var SDKManagerAPI = null;
(function (container) {
	labels_values = getJSONData('staticData/secureappitems.json');
	Alloy.Collections.secureapplist.reset(labels_values);
	if(OS_ANDROID){
		
		SDKManagerAPI = require('sdkmanager_module');
		SDKManagerAPI.init(function(e){});
		
	}		
})($.secureappwin);

/**
 * Makes the corresponding AW method call and updates the list item (when clicked) with retrieved value.
 * Callback contains data and error attributes
 */
function getListItemValue(e){
	Ti.API.info("clicked an item");
	
		var index = e.itemIndex; //index of list item
	Ti.API.info('index: '+ index);
	switch(index){
		case 0:
			SDKManagerAPI.getEnrollmentUsername(function(e){
				if(e.data != null || e.data != undefined){
					labels_values[index].value = e.data;
					Alloy.Collections.secureapplist.reset(labels_values); //bind new JSON data to listview
				}else{
					labels_values[index].value = e.error;
					Alloy.Collections.secureapplist.reset(labels_values);
				}	
			});
			break;
		case 1:
			SDKManagerAPI.getEnrollmentPassword(function(e){
				if(e.data != null || e.data != undefined){
					labels_values[index].value = e.data;
					Alloy.Collections.secureapplist.reset(labels_values); //bind new JSON data to listview
				}else{
					labels_values[index].value = e.error;
					Alloy.Collections.secureapplist.reset(labels_values);
				}	
			});
			break;
		case 2:
			SDKManagerAPI.getHMACToken("HARDCODEDAPPID", false, function(e){
				if(e.data != null || e.data != undefined){
					labels_values[index].value = e.data;
					Alloy.Collections.secureapplist.reset(labels_values); //bind new JSON data to listview
				}else{
					labels_values[index].value = e.error;
					Alloy.Collections.secureapplist.reset(labels_values);
				}	
			});
			break;
		case 3:
			SDKManagerAPI.getHMACToken("TESTAPPID", true, function(e){
				if(e.data != null || e.data != undefined){
					labels_values[index].value = e.data;
					Alloy.Collections.secureapplist.reset(labels_values); //bind new JSON data to listview
				}else{
					labels_values[index].value = e.error;
					Alloy.Collections.secureapplist.reset(labels_values);
				}	
			});
			break;
		case 4:
			SDKManagerAPI.getUserID( function(e){
				if(e.data != null || e.data != undefined){
					labels_values[index].value = e.data;
					Alloy.Collections.secureapplist.reset(labels_values); //bind new JSON data to listview
				}else{
					labels_values[index].value = e.error;
					Alloy.Collections.secureapplist.reset(labels_values);
				}	
			});
			break;
		default:
			labels_values[index].value = "Not Available";
			Alloy.Collections.secureapplist.reset(labels_values); //bind new JSON data to listview
			break;
	}
}

function getJSONData(directory) {
/**
* Fetch and return JSON data from app/lib/[directory/to/file] file
*/
	var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + directory);
	var key_values = JSON.parse(file.read().text).data;
	
	return key_values;
}