var sdkManagerAPI = {};
var awSDKManager; //instance of the SDKManager

var Activity = require('android.app.Activity'),
    currentActivity = new Activity(Ti.Android.currentActivity);

try {
	var SDKManager = require('com.airwatch.sdk.SDKManager');
	} catch(e) {
		console.log("Undefined SDKManager object");
		console.log(e.message);
	}
	
	if(awSDKManager == null){
		try{
			awSDKManager = SDKManager.init(currentActivity.getApplicationContext());
		}catch(e){
			console.log(e.message);
		}
	}
	//var SecureAppInfo = require('com.airwatch.sdk.SecureAppInfo');
	//var passcodePolicy = require('com.airwatch.sdk.profile.PasscodePolicy');
	//var appInfo = new SecureAppInfo();
	var passcodePolicy;
	var restrictionPolicy;

// sdkManagerAPI.init = function(){
	// if(awSDKManager == null){
		// try{
			// awSDKManager = SDKManager.init(currentActivity.getApplicationContext());
		// }catch(e){
			// return e;
		// }
	// }
// };

sdkManagerAPI.getAPIVersion = function(){
	if(awSDKManager){
		return awSDKManager.getAPIVersion();
	}else{
		console.log("Undefined SDKManager instance");
	}
};

sdkManagerAPI.getDeviceUid = function(){
	return awSDKManager.getDeviceUid();
};

sdkManagerAPI.hasAPIPermission = function(){
	return awSDKManager.hasAPIPermission();
};

sdkManagerAPI.isEnrolled = function(){
	return awSDKManager.isEnrolled();
};

sdkManagerAPI.getEnrollmentUsername = function(){
	return awSDKManager.getEnrollmentUsername();
};

sdkManagerAPI.getServerName = function(){
	return awSDKManager.getServerName();
};

sdkManagerAPI.getGroupId = function(){
	return awSDKManager.getGroupId();
};

sdkManagerAPI.getAuthenticationType = function(){
	return awSDKManager.getAuthenticationType();
};

sdkManagerAPI.authenticateUser = function(username,password){
	//appInfo = awSDKManager.getSecureAppInfo();
	return awSDKManager.authenticateUser(username, password);
};

sdkManagerAPI.isPasscodeRequired = function(){
	passcodePolicy = awSDKManager.getPasscodePolicy();
	return passcodePolicy.isPasscodeRequired();
};

sdkManagerAPI.getPasscodeComplexity = function(){
	passcodePolicy = awSDKManager.getPasscodePolicy();
	var complexity = passcodePolicy.getPassscodeComplexity();
	
	if(complexity == 1){
		return "Numeric";
	}else if(complexity == 2){
		return "Alpha numeric";
	}else{
		return "Unknown";
	}
};

sdkManagerAPI.getMinPasscodeLength = function(){
	passcodePolicy = awSDKManager.getPasscodePolicy();
	if(passcodePolicy != null){
		return passcodePolicy.getMinPasscodeLength();
	}
};

sdkManagerAPI.getMinComplexChars = function(){
	passcodePolicy = awSDKManager.getPasscodePolicy();
	if(passcodePolicy != null){
		return passcodePolicy.getMinComplexChars();
	}
};

sdkManagerAPI.getMaxPasscodeAge = function(){
	passcodePolicy = awSDKManager.getPasscodePolicy();
	if(passcodePolicy != null){
		return passcodePolicy.getMaxPasscodeAge() + " day(s)";
	}
};

sdkManagerAPI.getPasscodeHistory = function(){
	passcodePolicy = awSDKManager.getPasscodePolicy();
	if(passcodePolicy != null){
		return passcodePolicy.getPasscodeHistory();
	}
};

sdkManagerAPI.isCompliant = function(){
	return awSDKManager.isCompliant();
};

sdkManagerAPI.isCompromised = function(){
	return awSDKManager.isCompromised();
};

sdkManagerAPI.isEnterprise = function(){
	return awSDKManager.isEnterprise();
};

sdkManagerAPI.bluetoothAllowed = function(){
	restrictionPolicy = awSDKManager.getRestrictionPolicy();
	return restrictionPolicy.allowBluetooth();
};

sdkManagerAPI.cameraAllowed = function(){
	restrictionPolicy = awSDKManager.getRestrictionPolicy();
	return restrictionPolicy.allowCamera();
};

sdkManagerAPI.offlineModeAllowed = function(){
	restrictionPolicy = awSDKManager.getRestrictionPolicy();
	return restrictionPolicy.allowOfflineMode();
};

sdkManagerAPI.copyandcutAllowed = function(){
	restrictionPolicy = awSDKManager.getRestrictionPolicy();
	return restrictionPolicy.preventCopyAndCutActions();
};

sdkManagerAPI.wifiSSIDAllowed = function(){
	return awSDKManager.isAllowedWiFiSSID();
};

sdkManagerAPI.getProfileId = function(){
	return awSDKManager.getApplicationProfile().getProfileId();
};

sdkManagerAPI.getProfileName = function(){
	return awSDKManager.getApplicationProfile().getName();
};

sdkManagerAPI.isDNDEnabled = function(){
	return awSDKManager.isDNDEnabled();
};

sdkManagerAPI.isDNDStatusSet = function(){
	return awSDKManager.isDNDStatusSet();
};

sdkManagerAPI.isSSOSessionValid = function(){
	return awSDKManager.isSSOSessionValid();
};

sdkManagerAPI.isSSOEnabled = function(){
	return awSDKManager.isSSOEnabled();
};

sdkManagerAPI.getSSOGracePeriod = function(){
var dndStatus = awSDKManager.getAnchorAppStatus().getDNDStatus();
    switch (dndStatus){
        case 0:
            return "DND Status is not set";
        case 1:
            return "DND Status is set";
        default:
            return "Unknown";
    }
};

sdkManagerAPI.getWorkspaceExitMode = function(){
	var mode = awSDKManager.getAnchorAppStatus().getWorkspaceExitMode();
    switch (mode){
	    case 0:
	        return "Lock & Exit";
	    case 1:
	        return "Exit with Notification";
	}
};

sdkManagerAPI.getAnchorType = function(){
	var anchorType = awSDKManager.getAnchorAppStatus().getAnchorType();
	switch (anchorType){
    	case 0:
    		return "Agent";
      	case 1:
          return "Workspace";
          break;
      	default:
          return "Unknown";
	}
};
module.exports = sdkManagerAPI;