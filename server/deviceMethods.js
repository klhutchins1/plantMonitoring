Meteor.methods({
	addDevice: function (deviceName, deviceUse, deviceType, protocolSelect) {
    //check for valid info using reactiveraven.github.io/jqBootstrapValidation/
    //still needs serverside validation

    if (deviceName.length >= 25) {
      console.log("deviceName is too long at " + deviceName.length);
    }
    if (deviceUse != "Monitor" || deviceUse != "Control") {
      console.log("Use needs to be Monitor or Control");
    }
    if (deviceType != "temperature" || deviceType != "light" || deviceType != "humidity") {
      console.log("PlantWidth is out of range at " + width);
    }
    if (protocolSelect != "1Wire" || protocolSelect != "I2C") {
      console.log("protocolSelect needs to be 1Wire or I2C");
    }



    //need to move this into the if loop
		DeviceList.insert( {
			deviceName: deviceName,
			createdAt: new Date(),
      editedAt: new Date(),
      deviceUse: deviceUse,
      deviceType: deviceType,
      protocolSelect: protocolSelect,


		} );
	},

  removeDevice: function (device) {
    DeviceList.remove( { _id: device._id});
  }



});
