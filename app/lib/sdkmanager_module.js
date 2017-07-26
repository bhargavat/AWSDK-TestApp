var sdkManagerAPI = {};
var awSDKManager = null; //instance of the SDKManager

var Activity = require('android.app.Activity'),
    SDKManagerActivity = new Activity(Ti.Android.currentActivity);
var SDKManager = require('com.airwatch.sdk.SDKManager');

	var mypasscodePolicy = null;
	var restrictionPolicy = null;
	var ProxyType = require('com.airwatch.sdk.ProxyType');
	//var appInfo = require('com.airwatch.sdk.SecureAppInfo');
	//var myappInfo = null;
sdkManagerAPI.init = function(callback){
	Ti.API.info("Came to init function");
		Ti.API.info("Typeof callback: " + (typeof callback === "function"));
		Ti.API.info("AWSDKMANAGER-before: ", awSDKManager); //why its not able to run right away
		if(awSDKManager == null ||awSDKManager == undefined){
			try{
				// setTimeout(function(){
					Ti.API.info("Context: ", SDKManagerActivity.getApplicationContext());
					var context = SDKManagerActivity.getApplicationContext();
					awSDKManager = SDKManager.init(context);
				// },10000);
			}catch(e){
				Ti.API.info("Init failed");
			}
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

// sdkManagerAPI.getEnrollmentUsername = function(callback){
	// if(awSDKManager){
		// callback({
			// data: awSDKManager.getEnrollmentUsername(),
			// error: null
        // });
	// }else{
		// callback({
			// data: null,
			// error: "Not found"
		// });
	// }
// };

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

sdkManagerAPI.isSSOSessionValid = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.isSSOSessionValid(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.isSSOEnabled = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.isSSOEnabled(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getSSOGracePeriod = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.getSSOGracePeriod(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getDNDStatus = function(callback){
	if(awSDKManager){
		var dndStatus = awSDKManager.getAnchorAppStatus().getDNDStatus();
		callback({
			data: dndStatus,
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};
sdkManagerAPI.getWorkspaceExitMode = function(callback){ //change to callback
	var mode = awSDKManager.getAnchorAppStatus().getWorkspaceExitMode();
	callback({
		data: mode,
		error: null
	});
};

sdkManagerAPI.getAnchorType = function(callback){ // change to callback
	if(awSDKManager){
		var appStatus = awSDKManager.getAnchorAppStatus();
		var anchorType = appStatus.getAnchorType();
		callback({
			data: anchorType,
			error: null
		});
	}
};

sdkManagerAPI.getConsoleVersion = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.getConsoleVersion(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getIntegratedAuthEnabled = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.getIntegratedAuthenticationProfile().getIntegratedAuthEnabled(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getDomains = function(callback){
	var domains = awSDKManager.getIntegratedAuthenticationProfile().getDomains();
	
	if(domains == null || domains.length == 0){
		callback({
			data: null,
			error: "Domain is empty"
		});
	}else{
		callback({
			data: domains,
			error: null
		});
	}
};

sdkManagerAPI.getLGConfigureMode = function(callback){ //not working
	if(awSDKManager){
		callback({
			data: awSDKManager.getSharedDeviceStatus().getLGConfigureMode(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.isSharedDeviceModeEnabled = function(callback){ //not working
	if(awSDKManager){
		callback({
			data: awSDKManager.getSharedDeviceStatus().isSharedDeviceModeEnabled(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getcheckoutStatus = function(callback){ //not working [awSDKManager.getSharedDeviceStatus() = null]
	if(awSDKManager){
		callback({
			data: awSDKManager.getSharedDeviceStatus().getcheckoutStatus(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getSessionToken = function(callback){
	if(awSDKManager){
		Ti.API.info("ProxyType: " + ProxyType.F5);
		Ti.API.info("SessionToken: " + awSDKManager.getSessionToken(ProxyType.F5));
		callback({
			data: awSDKManager.getSessionToken(ProxyType.F5),
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
sdkManagerAPI.getCustomSettings = function(callback){
	var customSettingsString = awSDKManager.getCustomSettings().toString();
	if (null != customSettingsString && customSettingsString.trim().length != 0) {
		callback({
			data: customSettingsString,
			error: null
		});
	}
};

sdkManagerAPI.getAllProfileGroups = function(callback){
	if(awSDKManager){
		var profileGroups = "" + awSDKManager.getAllProfileGroups();
		Ti.API.info("profileGroups: " + profileGroups);
		Ti.API.info("size: " + profileGroups.length);
		var respArray = convertListtoArray(profileGroups);
		Ti.API.info("respArry is array?: "  + Array.isArray(respArray));
		Ti.API.info("array size: "+ respArray.length);
	}
	if(Array.isArray(respArray)){
		callback({
			data: respArray,
			error: null
		});
	}else{
		callback({
			data: null,
			error: "Not Found"
		});
	}
};

function convertListtoArray(list){
	if(typeof list === 'string'){
		list = list.replace("[","");
		list = list.replace("]","");
		var array = ["null"]; //initialize array with null string value
		if(list.includes(", ")){ //has more than 1 item
			array = list.split(", ");
		}else if ((list.length > 0) && !list.includes(", ")){ //has 1 item only
			array[0] = list;
		}
		return array;
	}
}

sdkManagerAPI.getLoggingStatus = function(callback){
	if(awSDKManager){
		var profile = awSDKManager.getLoggingSettings();
		if(profile){
			callback({
				data: profile.getLoggingStatus(),
				error: null
			});
		}else{
			callback({
				data: null,
				error: "Undefined LoggingProfile"
			});
		}
	}
};

sdkManagerAPI.getLoggingLevel = function(callback){
	if(awSDKManager){
		var profile = awSDKManager.getLoggingSettings();
		if(profile){
			callback({
				data: profile.getLoggingLevel(),
				error: null
			});
		}else{
			callback({
				data: null,
				error: "Undefined LoggingProfile"
			});
		}
	}
};

sdkManagerAPI.getDeviceLastCheckinTime = function(callback){
	if(awSDKManager){
		callback({
			data: awSDKManager.getDeviceLastCheckinTime(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.isAllowedWiFiSSID = function(callback){
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

sdkManagerAPI.isAllowedWiFiSSID = function(callback){
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

sdkManagerAPI.getSSOStatus = function(callback){
	if(awSDKManager){
		callback({
			data: "" + awSDKManager.getSSOStatus(),
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getApplicationConfigSetting = function(callback){
	if(awSDKManager){
		var configSetting = awSDKManager.getApplicationConfigSetting();
		Ti.API.info("config: " + configSetting);
		callback({
			data: configSetting,
			error: null
        });
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

//configSetting = awSDKManager.getApplicationConfigSetting();
/**------SECURE APP INFO------**/

sdkManagerAPI.getEnrollmentUsername = function(callback){
	if(awSDKManager){
		if(myappInfo == null || myappInfo == undefined){
			myappInfo = awSDKManager.getSecureAppInfo();
		}
		Ti.API.info("myappInfo: "+ myappInfo);
		Ti.API.info("EnrollmentUsername: " + myappInfo.getEnrollmentUsername());
		if(myappInfo){
			callback({
				data: myappInfo.getEnrollmentUsername(),
				error: null
	        });
       }else{
       		callback({
				data: null,
				error: "SecureAppInfo not found"
	        });
       }
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getEnrollmentUsername = function(callback){
	if(awSDKManager){
		var myappInfo = awSDKManager.getSecureAppInfo();
		
		Ti.API.info("myappInfo: "+ myappInfo);
		Ti.API.info("EnrollmentUsername: " + myappInfo.getEnrollmentUsername());
		if(myappInfo){
			callback({
				data: myappInfo.getEnrollmentUsername(),
				error: null
	        });
       }else{
       		callback({
				data: null,
				error: "SecureAppInfo not found"
	        });
       }
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getEnrollmentPassword = function(callback){
	if(awSDKManager){
		var myappInfo = awSDKManager.getSecureAppInfo();
		if(myappInfo){
			callback({
				data: myappInfo.getEnrollmentPassword(),
				error: null
	        });
       	}else{
       		callback({
				data: null,
				error: "SecureAppInfo not found"
	        });
       	}
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getHMACToken = function(appId, reregister, callback){
	if(awSDKManager){
		var myappInfo = awSDKManager.getSecureAppInfo();
		if(myappInfo){
			callback({
				data: myappInfo.register(appId, reregister),
				error: null
	        });
       	}else{
       		callback({
				data: null,
				error: "SecureAppInfo not found"
	        });
       	}
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

sdkManagerAPI.getUserID = function(callback){
	if(awSDKManager){
		var myappInfo = awSDKManager.getSecureAppInfo();
		if(myappInfo){
			callback({
				data: myappInfo.getUserID(),
				error: null
	        });
       	}else{
       		callback({
				data: null,
				error: "SecureAppInfo not found"
	        });
       	}
	}else{
		callback({
			data: null,
			error: "Not found"
		});
	}
};

module.exports = sdkManagerAPI;