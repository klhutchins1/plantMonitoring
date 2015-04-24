Template.createGardens.helpers({
	gardens: function () {
		return GardensList.find();
	},
	gardensCount: function () {
		return GardensList.find().count();
	}
});

Template.createGardens.events({
	"submit .new-garden": function(event){
		var gardenName = event.target.gardenNameForm.value;
		//console.log(gardenName);
		Meteor.call('addGarden', gardenName);
		return false;
	} 
});

Template.settingsRoute.helpers({
	settings: function(){
		return SettingsList.find();
	},
	settingTypeIs: function(inputType){
		return this.inputType === inputType;
	}

});

Template.settingsRoute.events({
	"click .toggle-checked": function () {
		Meteor.call("toggleChecked", this._id, ! this.isChecked );
		
	},
	"click .timeZone": function(){
		//var tz = this.value;
		//console.log(tz);
		//Meteor.call("saveDropDown", this._id);
	},
	"submit .new-setting": function () {
		var settingName = event.target.settingNameForm.value;
		//ensure setting name has value, serverSide check
		if(settingName == ""){
			console.log("User did not enter a Setting Name");
			return false;
		}else{
			Meteor.call('createSettings', settingName);
			event.target.settingNameForm.value = "";
			return false;
		}
	},
	"click .DeploySettings": function () {
		Meteor.call('gettingStartedDeploySettings');
	}
});
	