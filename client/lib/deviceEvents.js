//gets form info to create the plants and calls the addPlant method on the server to add data to DB
Template.addDeviceTemplate.events( {
	"click #saveDevice": function (event) {
		var deviceName = event.target.deviceLabel.value;
    var deviceUse = event.target.useSelect.value;
    var deviceType = event.target.typeSelect.value;
    var protocolSelect = event.target.protocolSelect.value;


		Meteor.call('addDevice', deviceName, deviceUse, deviceType, protocolSelect);
		return false;
	}
} );
