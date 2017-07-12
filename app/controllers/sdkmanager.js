var labels_values;

(function (container) {
	labels_values = getJSONData('staticData/sdkmgritems.json'); //JSON object containing the data from external JSON file
	
	if(OS_ANDROID){
		SDKManagerAPI = require('sdkmanager_module');
		
		//SDKManagerAPI.init();
		
		labels_values[0].value = SDKManagerAPI.getAPIVersion();
		labels_values[1].value = SDKManagerAPI.getDeviceUid();
		labels_values[2].value = SDKManagerAPI.hasAPIPermission();
		labels_values[3].value = SDKManagerAPI.isEnrolled();
		labels_values[4].value = SDKManagerAPI.getEnrollmentUsername();
		labels_values[5].value = SDKManagerAPI.getServerName();
		labels_values[6].value = SDKManagerAPI.getGroupId();
		labels_values[7].value = SDKManagerAPI.getAuthenticationType();
		labels_values[8].value = SDKManagerAPI.authenticateUser("st","st"); //true
		labels_values[9].value = SDKManagerAPI.isPasscodeRequired();
		labels_values[10].value = SDKManagerAPI.getPasscodeComplexity();
		labels_values[11].value = SDKManagerAPI.getMinPasscodeLength();
		// labels_values[12].value = SDKManagerAPI.
		// labels_values[13].value = SDKManagerAPI.
		// labels_values[14].value = SDKManagerAPI.
		// labels_values[15].value = SDKManagerAPI.
		labels_values[16].value = SDKManagerAPI.isEnterprise();

	}
})($.sdkmgrwin);
Alloy.Collections.sdkmanagerlist.reset(labels_values); //binds the JSON data to the listview

function getJSONData(directory) {
/**
* Fetch and return JSON data from app/lib/[directory/to/file] file
*/
// Here would be actual get request to Mulesoft for data
// Mock data retrieval
	var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + directory);
	var key_values = JSON.parse(file.read().text).data;
	
	return key_values;
}
