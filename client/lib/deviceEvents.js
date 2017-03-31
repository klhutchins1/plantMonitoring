Template.createDeviceTemplate.events( {
	"submit #new-device": function (event) {
		var deviceName = event.target.deviceNameForm.value;
    var deviceUse = event.target.useSelectForm.value.toLowerCase();
    var deviceType = event.target.typeSelectForm.value.toLowerCase();
    var protocolSelect = event.target.protocolSelectForm.value.toLowerCase();
		var isNew = true;
		console.log("Just about to create Device");
		Meteor.call('saveDevice', isNew, deviceName, deviceUse, deviceType,
								protocolSelect, null);
		//return false;
		//Router.go('devices.show');
	}
} );

Template.editDeviceDetailsTemplate.events( {
	"submit #saveDevice": function (event) {
		var deviceName = event.target.deviceName.value;
    var deviceUse = event.target.useSelect.value.toLowerCase();
    var deviceType = event.target.typeSelect.value.toLowerCase();
    var protocolSelect = event.target.protocolSelect.value.toLowerCase();
		var isNew = true;
		console.log("Just about to edit Device");
		Meteor.call('saveDevice', isNew, deviceName, deviceUse, deviceType,
								protocolSelect, this._id);
		return false;
	},

	"click #deleteDevice": function (event){
    var device = DevicesList.findOne(this._id);
    var del = confirm("Are you sure you want to Delete?");
    if (del == true){
			console.log("Just about to Delete Device");
      Meteor.call('removeDevice', device);
      Router.go('devices.show');
    }else{
			Router.go('devices.show');
    }
  }
} );

Template.createDeviceTemplate.onRendered(function(){
    //this.$('.collapsible').collapsible();
		//this.$('select').material_select();
    this.$('.dropdown').dropdown();

});
