/**
 * @author Bhargava Ramisetty
 */
// Grab a reference to the service and its intent
var service = Ti.Android.currentService;
var serviceIntent = service.intent;
 
Ti.API.info(service.serviceInstanceId);

