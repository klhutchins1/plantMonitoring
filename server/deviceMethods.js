Meteor.methods({
	saveDevice: function (isNew, deviceName, deviceUse, deviceType, protocolSelect, deviceId) {
    //check for valid info using reactiveraven.github.io/jqBootstrapValidation/
    //still needs serverside validation
		console.log(isNew + " " + deviceName + " " +  deviceUse + " " + deviceType + " " + protocolSelect + " " + deviceId);
		console.log("Gets to save Device, Checking for valid input..");

		if (deviceName.length >= 25 || deviceName.length < 0) {
      console.log("deviceName is too long with " + deviceName.length + " characters");
			return false;
		} else if (deviceUse != "monitor" && deviceUse != "control") {
      console.log("Use needs to be Monitor or Control, but is " + deviceUse);
			return false;
    } else if (deviceType != "temperature" && deviceType != "light"
						&& deviceType != "humidity") {
      console.log("deviceType is out of range with a value of " + deviceType);
			return false;
    } else if (protocolSelect != "1wire" && protocolSelect != "i2c") {
      console.log("protocolSelect needs to be 1Wire or I2C");
			return false;
    } else if (isNew) {
			console.log("Device being inserted into DevicesList");
	    //creates a new device
			DevicesList.insert( {
				deviceName: deviceName,
				createdAt: new Date(),
	      editedAt: new Date(),
	      deviceUse: deviceUse,
	      deviceType: deviceType,
	      protocol: protocolSelect
			} );

	} else if (! isNew ) {
		console.log("Device updated");
		DevicesList.update( deviceId, { $set:  {
			deviceName: deviceName,
			createdAt: new Date(),
			editedAt: new Date(),
			deviceUse: deviceUse,
			deviceType: deviceType,
			protocol: protocolSelect
			}
		} );
	}
},

  removeDevice: function (device) {
    DevicesList.remove( { _id: device._id});
  }



});
