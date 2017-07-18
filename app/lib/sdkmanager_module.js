var sdkManagerAPI = {};
var awSDKManager = null; //instance of the SDKManager

var Activity = require('android.app.Activity'),
    currentActivity = new Activity(Ti.Android.currentActivity);
var SDKManager = require('com.airwatch.sdk.SDKManager');

	var PasscodePolicy = require('com.airwatch.sdk.profile.PasscodePolicy');
	Ti.API.info("PasscodePolicy-import: "+ PasscodePolicy);
	var mypasscodePolicy = null;
	var restrictionPolicy = null;

sdkManagerAPI.init = function(callback){
	Ti.API.info("Came to init function");
		Ti.API.info("AWSDKMANAGER-before: ", awSDKManager); //why its not able to run right away
		try{
			awSDKManager = SDKManager.init(currentActivity.getApplicationContext());
			Ti.API.info("Context: ", currentActivity.getApplicationContext());
		}catch(e){
			Ti.API.info(e.message);
			Ti.API.info("Init failed");
		}
		Ti.API.info("AWSDKMANAGER-after: ", awSDKManager);
		if(!awSDKManager){
			callback({
				error: "Failed to initialize AirWatchSDK"
			});
		}else{
			var toast = Ti.UI.createNotification({
				message:"AirWatchSDK Initialized Successfully. Click any item to reveal value.",
		    	duration: Ti.UI.NOTIFICATION_DURATION_LONG
			});
			toast.show();
			callback({
				error: null
			});
		}
};


sdkManagerAPI.getAPIVersion = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.getAPIVersion(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getDeviceUid = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.getDeviceUid(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.hasAPIPermission = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.hasAPIPermission(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.isEnrolled = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.isEnrolled(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getEnrollmentUsername = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.getEnrollmentUsername(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getServerName = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.getServerName(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getGroupId = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.getGroupId(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getAuthenticationType = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.getAuthenticationType(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.authenticateUser = function(username,password, callback){
	//appInfo = awSDKManager.getSecureAppInfo();
	if(awSDKManager){
		callback({
			data: awSDKManager.authenticateUser(username, password),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.isPasscodeRequired = function(callback){
	if(awSDKManager){
		mypasscodePolicy = awSDKManager.getPasscodePolicy();
		Ti.API.info("mypasscodePolicy-after[isPasscodeRequired]: " + mypasscodePolicy);
		
		if(mypasscodePolicy){
			callback({
				data: mypasscodePolicy.isPasscodeRequired(),
				error: null
	        });
       }else{
       		Ti.API.info("mypasscodePolicy[isPasscodeRequired]: "+ mypasscodePolicy);
       		callback({
			data: null,
			error: "Not found"
		});
       }
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};	

sdkManagerAPI.getPasscodeComplexity = function(callback){
	if(awSDKManager){
		mypasscodePolicy = awSDKManager.getPasscodePolicy();
		Ti.API.info("mypasscodePolicy-after[getPasscodeComplexity]: " + mypasscodePolicy);
		callback({
			data: mypasscodePolicy.getPassscodeComplexity(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getMinPasscodeLength = function(callback){
	if(awSDKManager){
		mypasscodePolicy = awSDKManager.getPasscodePolicy();
		//Ti.API.info("mypasscodePolicy-after[getMinPasscodeLength]: " + mypasscodePolicy);
		Ti.API.info("passLength: " + mypasscodePolicy.getMinPasscodeLength());
		callback({
			data: mypasscodePolicy.getMinPasscodeLength(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getMinComplexChars = function(callback){
	if(awSDKManager){
		mypasscodePolicy = awSDKManager.getPasscodePolicy();
		//Ti.API.info("mypasscodePolicy-after[getMinPasscodeLength]: " + mypasscodePolicy);
		Ti.API.info("MinComplexChars: " + mypasscodePolicy.getMinComplexChars());
		callback({
			data: mypasscodePolicy.getMinComplexChars(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getMaxPasscodeAge = function(callback){
	if(awSDKManager){
		mypasscodePolicy = awSDKManager.getPasscodePolicy();
		//Ti.API.info("mypasscodePolicy-after[getMaxPasscodeAge]: " + mypasscodePolicy);
		Ti.API.info("maxPasscodeAge: " + mypasscodePolicy.getMaxPasscodeAge());
		callback({
			data: mypasscodePolicy.getMaxPasscodeAge(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getPasscodeHistory = function(callback){
	if(awSDKManager){
		mypasscodePolicy = awSDKManager.getPasscodePolicy();
		Ti.API.info("mypasscodePolicy-after[getPasscodeHistory]: " + mypasscodePolicy);
		Ti.API.info('PasscodeHistory: '+ mypasscodePolicy.getPasscodeHistory());
		callback({
			data: mypasscodePolicy.getPasscodeHistory(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.isCompliant = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.isCompliant(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.isCompromised = function(callback){
	if(awSDKManager){
		Ti.API.info("isCompromised: "+ awSDKManager.isCompromised());
		callback({
			data: awSDKManager.isCompromised(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.isEnterprise = function(callback){
	Ti.API.info("isEnterprise: "+ awSDKManager.isEnterprise());
	if(awSDKManager){
		callback({
			data: awSDKManager.isEnterprise(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.bluetoothAllowed = function(callback){ //need restrictionPolicy
	restrictionPolicy = awSDKManager.getRestrictionPolicy();
	if(awSDKManager){
		callback({
			data: restrictionPolicy.allowBluetooth(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.cameraAllowed = function(callback){ //need restrictionPolicy
	restrictionPolicy = awSDKManager.getRestrictionPolicy();
	Ti.API.info("restrictionPolicy: " + restrictionPolicy);
	if(awSDKManager){
		callback({
			data: restrictionPolicy.allowCamera(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.offlineModeAllowed = function(callback){
	restrictionPolicy = awSDKManager.getRestrictionPolicy();
	Ti.API.info("offlineMode: " + restrictionPolicy.allowOfflineMode());
	if(awSDKManager){
		callback({
			data: restrictionPolicy.allowOfflineMode(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.preventCopyAndCutActions = function(callback){
	restrictionPolicy = awSDKManager.getRestrictionPolicy();
	if(awSDKManager){
		callback({
			data: restrictionPolicy.preventCopyAndCutActions(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}	
};


sdkManagerAPI.isAllowedWiFiSSID = function(callback){ //need restrictionPolicy
	if(awSDKManager){
		callback({
			data: awSDKManager.isAllowedWiFiSSID(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getProfileId = function(callback){ //need restrictionPolicy
	if(awSDKManager){
			if(awSDKManager.getApplicationProfile() != null || awSDKManager.getApplicationProfile() != undefined){
				callback({
					data: awSDKManager.getApplicationProfile().getProfileId(),
					error: null
		        });
			}
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getProfileName = function(callback){
	if(awSDKManager){
		if(awSDKManager.getApplicationProfile() != null || awSDKManager.getApplicationProfile() != undefined){
			callback({
				data: awSDKManager.getApplicationProfile().getName(),
				error: null
	        });
		}
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};
// 
// //getcertificate method here
// 
sdkManagerAPI.isDNDEnabled = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.isDNDEnabled(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.isDNDStatusSet = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.isDNDStatusSet(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};
// 
// sdkManagerAPI.isSSOSessionValid = function(callback){
	// if(awSDKManager){
		// callback({
			// data: awSDKManager.isSSOSessionValid(),
			// error: null
        // });
	// }else{
		// callback({
			// data: null,
			// error: "Not found"
		// });
	// }
// };
// 
// sdkManagerAPI.isSSOEnabled = function(callback){
	// if(awSDKManager){
		// callback({
			// data: awSDKManager.isSSOEnabled(),
			// error: null
        // });
	// }else{
		// callback({
			// data: null,
			// error: "Not found"
		// });
	// }
// };

// sdkManagerAPI.getSSOGracePeriod = function(callback){ //chang to callback
// var dndStatus = awSDKManager.getAnchorAppStatus().getDNDStatus();
	// var response = null;
    // switch (dndStatus){
        // case 0:
            // response = "DND Status is not set";
            // break;
        // case 1:
            // response = "DND Status is set";
            // break;
        // default:
            // response = "Not found";
            // break;
    // }
    // callback({
		// data: response,
		// error: null
	// });
// };
// 
// sdkManagerAPI.getWorkspaceExitMode = function(){ //change to callback
	// var mode = awSDKManager.getAnchorAppStatus().getWorkspaceExitMode();
    // switch (mode){
	    // case 0:
	        // return "Lock & Exit";
	    // case 1:
	        // return "Exit with Notification";
	    // default:
	    	// return "Unknown";
	// }
// };
// 
// sdkManagerAPI.getAnchorType = function(){ // change to callback
	// var anchorType = awSDKManager.getAnchorAppStatus().getAnchorType();
	// switch (anchorType){
		// case 0:
			// return "Agent";
			// break;
		// case 1:
			// return "Workspace";
			// break
		// default:
			// return "Unknown";
			// break;
	// }
// };
// 
// sdkManagerAPI.getConsoleVersion = function(callback){
	// if(awSDKManager){
		// callback({
			// data: awSDKManager.getConsoleVersion(),
			// error: null
        // });
	// }else{
		// callback({
			// data: null,
			// error: "Not found"
		// });
	// }
	// // if(awSDKManager){
		// // return awSDKManager.getConsoleVersion();
	// // }
// };
// 
// sdkManagerAPI.getIntegratedAuthEnabled = function(){ //change to callback
	// var status = awSDKManager.getIntegratedAuthenticationProfile().getIntegratedAuthEnabled();
	// switch (status) {
		// case 0:
			// callback({
				// data: null,
				// error: "IntegratedAuthentication status is not set on AirWatch"
			// });
			// break;
			// //return "IntegratedAuthentication status is not set on AirWatch";
        // case 1:
			// callback({
				// data: "IntegratedAuthentication status is set on AirWatch",
				// error: null
			// });
			// //return "IntegratedAuthentication status is set on AirWatch";
		// default:
			// callback({
				// data: null,
				// error: "IntegratedAuthentication status is unknown on AirWatch"
			// });
			// //return "IntegratedAuthentication status is unknown on AirWatch";
    // }
	// // switch (status) {
		// // case 0:
			// // return "IntegratedAuthentication status is not set on AirWatch";
        // // case 1:
			// // return "IntegratedAuthentication status is set on AirWatch";
		// // default:
			// // return "IntegratedAuthentication status is unknown on AirWatch";
    // // }
// };
// 
// sdkManagerAPI.getDomains = function(){
	// var domains = awSDKManager.getIntegratedAuthenticationProfile().getDomains();
// 	
	// if(domains == null || domains.length == 0){
		// return "Domain is empty";
	// }else{
		// return domains;
	// }
// };
// 
// sdkManagerAPI.getLGConfigureMode = function(){
	// if(awSDKManager){
		// callback({
			// data: awSDKManager.getSharedDeviceStatus().getLGConfigureMode(),
			// error: null
        // });
	// }else{
		// callback({
			// data: null,
			// error: "Not found"
		// });
	// }
	// //return awSDKManager.getSharedDeviceStatus().getLGConfigureMode();
// };
// 
// sdkManagerAPI.isSharedDeviceModeEnabled = function(){
	// return awSDKManager.getSharedDeviceStatus().isSharedDeviceModeEnabled();
// };
// 
// sdkManagerAPI.getcheckoutStatus = function(){
	// return awSDKManager.getSharedDeviceStatus().getcheckoutStatus();
// };
// 
// sdkManagerAPI.getSessionToken = function(){
	// //proxytype?
// };
// 
// sdkManagerAPI.getCustomSettings = function(){
	// var customSettingsString = awSDKManager.getCustomSettings();
	// var response = "";
	// if (null != customSettingsString && customSettingsString.trim().length() != 0) {
		// response += "------- Custom Profile : -------\n";
		// response += customSettingsString;
		// response += "\n------- ### End ### -------\n\n";
	// } else {
		// response += "N/A";
	// }
	// return response;
// };
// 
// sdkManagerAPI.getAllProfileGroups = function(){
	// //getting List<String> in js? 
// };

module.exports = sdkManagerAPI;