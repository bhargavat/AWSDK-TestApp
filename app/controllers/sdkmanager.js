var labels_values;
var SDKManagerAPI = null;
(function (container) {
	labels_values = getJSONData('staticData/sdkmgritems.json'); //JSON object containing the data from external JSON file
	Alloy.Collections.sdkmanagerlist.reset(labels_values);
	if(OS_ANDROID){
		// var Activity = require('android.app.Activity');
    	// var	currentActivity = new Activity(Ti.Android.currentActivity);
    		
		SDKManagerAPI = require('sdkmanager_module');
		
		SDKManagerAPI.init(function(e){
			Ti.API.info("initializing");
			// if(e.error){
				// alert(e.error);
				// return;
			// }
			Ti.API.info("initialized");
		});
		
	}		
})($.sdkmgrwin);
// Alloy.Collections.sdkmanagerlist.reset(labels_values); //binds the JSON data to the listview

function getListItemValue(e){
	var index = e.itemIndex;
	Ti.API.info('index: '+ index);
	switch(index){
		case 0:
			SDKManagerAPI.getAPIVersion(function(e){
				if(e.data != null || e.data != undefined){
					Ti.API.info("API version: "+ e.data);
					labels_values[0].value = e.data;
					Alloy.Collections.sdkmanagerlist.reset(labels_values);
				}else{
					Ti.API.info(e.error);
					labels_values[0].value = e.error;
					Alloy.Collections.sdkmanagerlist.reset(labels_values);
				}	
			});
			break;
		case 1:
			SDKManagerAPI.getDeviceUid(function(e){
				if(e.data != null || e.data != undefined){
					labels_values[1].value = e.data;
					Alloy.Collections.sdkmanagerlist.reset(labels_values);
				}else{
					labels_values[1].value = e.error;
					Alloy.Collections.sdkmanagerlist.reset(labels_values);
				}
			});
			break;
		case 2:
			SDKManagerAPI.hasAPIPermission(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[2].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[2].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 3:
			SDKManagerAPI.isEnrolled(function(e){
			if(e.data){
				labels_values[3].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[3].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 4:
			SDKManagerAPI.getEnrollmentUsername(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[4].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[4].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 5:
			SDKManagerAPI.getServerName(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[5].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[5].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 6:
			SDKManagerAPI.getGroupId(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[6].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[6].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 7:
			SDKManagerAPI.getAuthenticationType(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[7].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[7].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 8:
			SDKManagerAPI.authenticateUser("st","st",function(e){
			if(e.data != null || e.data != undefined){
				labels_values[8].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[8].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 9:
			SDKManagerAPI.isPasscodeRequired(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[9].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[9].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 10:
			SDKManagerAPI.getPasscodeComplexity(function(e){
			if(e.data != null || e.data != undefined){
				if(e.data == 1){
					labels_values[10].value = e.data + " (Numeric)";
				}else if(e.data == 2){
					labels_values[10].value = e.data +" (Alpha numeric)";
				}
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[10].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 11: 
			SDKManagerAPI.getMinPasscodeLength(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[11].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[11].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 12:
			SDKManagerAPI.getMinComplexChars(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[12].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[12].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 13:
			SDKManagerAPI.getMaxPasscodeAge(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[13].value = e.data + " day(s)";
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[13].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 14:
			SDKManagerAPI.getPasscodeHistory(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[14].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[14].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 15:
			SDKManagerAPI.isCompliant(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[15].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[15].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 16:
			SDKManagerAPI.isCompromised(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[16].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[16].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 17:
			SDKManagerAPI.isEnterprise(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[17].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[17].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 18:
			SDKManagerAPI.bluetoothAllowed(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[18].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[18].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 19:
			SDKManagerAPI.cameraAllowed(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[19].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[19].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 20:
			SDKManagerAPI.offlineModeAllowed(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[20].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[20].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 21:
			SDKManagerAPI.preventCopyAndCutActions(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[21].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[21].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 22:
			SDKManagerAPI.isAllowedWiFiSSID(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[22].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[22].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 23:
			SDKManagerAPI.getProfileId(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[23].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[23].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 24:
			SDKManagerAPI.getProfileName(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[24].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[24].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
			//get certficate needed here
		case 26:
			SDKManagerAPI.isDNDEnabled(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[26].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[26].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 27:
			SDKManagerAPI.isDNDStatusSet(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[27].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[27].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 28:
			SDKManagerAPI.isSSOSessionValid(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[28].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[28].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 29:
			SDKManagerAPI.isSSOEnabled(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[29].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[29].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 30:
			SDKManagerAPI.getSSOGracePeriod(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[30].value = e.data + " minute(s)";
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[30].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
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
