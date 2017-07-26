var labels_values;
var SDKManagerAPI = null;
(function (container) {
	labels_values = getJSONData('staticData/sdkmgritems.json'); //JSON object containing the data from external JSON file
	Alloy.Collections.sdkmanagerlist.reset(labels_values);
	if(OS_ANDROID){ 		
		SDKManagerAPI = require('sdkmanager_module');
		SDKManagerAPI.init(function(e){}); //initialize SDKManager to access its methods	
	}		
})($.sdkmgrwin);
/**
 * Makes the corresponding AW method call and updates the list item (when clicked) with retrieved value.
 * Callback contains data and error attributes
 */
function getListItemValue(e){
	var index = e.itemIndex; //index of list item
	Ti.API.info('index: '+ index);
	switch(index){
		case 0:
			SDKManagerAPI.getAPIVersion(function(e){
				if(e.data != null || e.data != undefined){
					Ti.API.info("API version: "+ e.data);
					labels_values[index].value = e.data;
					Alloy.Collections.sdkmanagerlist.reset(labels_values); //bind new JSON data to listview
				}else{
					Ti.API.info(e.error);
					labels_values[index].value = e.error;
					Alloy.Collections.sdkmanagerlist.reset(labels_values);
				}	
			});
			break;
		case 1:
			SDKManagerAPI.getDeviceUid(function(e){
				if(e.data != null || e.data != undefined){
					labels_values[index].value = e.data;
					Alloy.Collections.sdkmanagerlist.reset(labels_values);
				}else{
					labels_values[index].value = e.error;
					Alloy.Collections.sdkmanagerlist.reset(labels_values);
				}
			});
			break;
		case 2:
			SDKManagerAPI.hasAPIPermission(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 3:
			SDKManagerAPI.isEnrolled(function(e){
			if(e.data){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 4:
			SDKManagerAPI.getEnrollmentUsername(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 5:
			SDKManagerAPI.getServerName(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 6:
			SDKManagerAPI.getGroupId(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 7:
			SDKManagerAPI.getAuthenticationType(function(e){
			if(e.data != null || e.data != undefined){
				var response = null;
				switch (e.data){
				    case 0:
				        response = "No Authentication Required";
				        break;
				    case 1:
				        response = "Username & Password";
				        break;
				    default:
				    	response = "Passcode";
				    	break;
				}
				labels_values[index].value = e.data + " (" + response + ")";
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 8:
			SDKManagerAPI.authenticateUser("st","st",function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 9:
			SDKManagerAPI.isPasscodeRequired(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 10:
			SDKManagerAPI.getPasscodeComplexity(function(e){
			if(e.data != null || e.data != undefined){
				if(e.data == 1){
					labels_values[index].value = e.data + " (Numeric)";
				}else if(e.data == 2){
					labels_values[index].value = e.data +" (Alpha numeric)";
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
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 12:
			SDKManagerAPI.getMinComplexChars(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 13:
			SDKManagerAPI.getMaxPasscodeAge(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data + " day(s)";
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 14:
			SDKManagerAPI.getPasscodeHistory(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 15:
			SDKManagerAPI.isCompliant(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 16:
			SDKManagerAPI.isCompromised(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 17:
			SDKManagerAPI.isEnterprise(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 18:
			SDKManagerAPI.bluetoothAllowed(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 19:
			SDKManagerAPI.cameraAllowed(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 20:
			SDKManagerAPI.offlineModeAllowed(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 21:
			SDKManagerAPI.preventCopyAndCutActions(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 22:
			SDKManagerAPI.isAllowedWiFiSSID(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 23:
			SDKManagerAPI.getProfileId(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 24:
			SDKManagerAPI.getProfileName(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
			//get certficate needed here
		case 26:
			SDKManagerAPI.isDNDEnabled(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 27:
			SDKManagerAPI.isDNDStatusSet(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 28:
			SDKManagerAPI.isSSOSessionValid(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 29:
			SDKManagerAPI.isSSOEnabled(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 30:
			SDKManagerAPI.getSSOGracePeriod(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data + " minute(s)";
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 31:
			SDKManagerAPI.getDNDStatus(function(e){
			if(e.data != null || e.data != undefined){
			var response = null;
			switch (e.data){
				case 0:
				    response = "DND Status is not set";
				    break;
				case 1:
				    response = "DND Status is set";
				    break;
				default:
				    response = "Unknown";
					break;
			}
				labels_values[index].value = response;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 32:
			SDKManagerAPI.getWorkspaceExitMode(function(e){
			if(e.data != null || e.data != undefined){
				var response = null;
				switch (e.data){
				    case 0:
				        response = "Lock & Exit";
				        break;
				    case 1:
				        response = "Exit with Notification";
				        break;
				    default:
				    	response = "Unknown";
				    	break;
				}
				labels_values[index].value = response;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 33:
			SDKManagerAPI.getAnchorType(function(e){
			if(e.data != null || e.data != undefined){
				var response = null;
				switch (e.data){
					case 0:
						response = "Agent";
						break;
					case 1:
						response = "Workspace";
						break;
					default:
						response = "Unknown";
						break;
				}
				labels_values[index].value = response;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;	
		case 34:
			SDKManagerAPI.getConsoleVersion(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data.toFixed(1);
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 35:
			SDKManagerAPI.getIntegratedAuthEnabled(function(e){
			if(e.data != null || e.data != undefined){
				var response = null;
				switch (e.data){
					case 0:
						response = "IntegratedAuthentication status is not set on AirWatch";
						break;
					case 1:
						response = "IntegratedAuthentication status is set on AirWatch";
						break;
					default:
						response = "IntegratedAuthentication status is unknown on AirWatch";
						break;
				}
				labels_values[index].value = response;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 36:
			SDKManagerAPI.getDomains(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;	
		case 37:
			SDKManagerAPI.getLGConfigureMode(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 38:
			SDKManagerAPI.isSharedDeviceModeEnabled(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 39:
			SDKManagerAPI.getcheckoutStatus(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 40:
			SDKManagerAPI.getSessionToken(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = "null";
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 41:
			SDKManagerAPI.getCustomSettings(function(e){
			if(e.data != null || e.data != undefined){
				var response = "------- Custom Profile : -------\n";
				response += e.data;
				response += "\n------- ### End ### -------\n";
				
				labels_values[index].value = response;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 42:
			SDKManagerAPI.getAllProfileGroups(function(e){
			if(e.data != null || e.data != undefined){
				var groups = e.data;
				var response = "";
				for(group in groups){
					response += groups[group] + "\n";
				}
				response = response.substr(0,response.length-1); //remove last new-line char
				labels_values[index].value = response;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 43:
			SDKManagerAPI.getLoggingStatus(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 44:
			SDKManagerAPI.getLoggingLevel(function(e){
			if(e.data != null || e.data != undefined){
				var response = null;
				switch (e.data){
					case 6:
						response = "Error";
						break;
					case 5:
						response = "Warning";
						break;
					case 4:
						response = "Information";
						break;
					case 3:
						response = "Debug";
						break;	
					default:
						response = "Unknown";
						break;					
				}
				labels_values[index].value = response;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 45:
			SDKManagerAPI.getLoggingStatus(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 46:
			SDKManagerAPI.getDeviceLastCheckinTime(function(e){
			if(e.data != null || e.data != undefined){
				var date = new Date(e.data); //format data type 'long' to Date object
				labels_values[index].value = date.toString();
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 47:
			SDKManagerAPI.isAllowedWiFiSSID(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		// case 48:
			// SDKManagerAPI.isAllowedWiFiSSID(function(e){
			// if(e.data != null || e.data != undefined){
				// labels_values[index].value = e.data;
				// Alloy.Collections.sdkmanagerlist.reset(labels_values);
			// }else{
				// labels_values[index].value = e.error;
				// Alloy.Collections.sdkmanagerlist.reset(labels_values);
			// }
			// });
			// break;
		case 49:
			SDKManagerAPI.getApplicationConfigSetting(function(e){
			if(e.data != null || e.data != undefined){
				var dict = e.data;
				var response = "";
				// Ti.API.info("Hello's value': "+ dict['random']);
				// labels_values[index].value = e.data;
				for(var key in dict){
					response += "[key: " + key + "], [value: "+ dict[key] + "]\n";
				}
				labels_values[index].value = response;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		case 50:
			SDKManagerAPI.getSSOStatus(function(e){
			if(e.data != null || e.data != undefined){
				labels_values[index].value = ""+e.data;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}else{
				labels_values[index].value = e.error;
				Alloy.Collections.sdkmanagerlist.reset(labels_values);
			}
			});
			break;
		default:
			labels_values[index].value = "Not available";
			Alloy.Collections.sdkmanagerlist.reset(labels_values);
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
