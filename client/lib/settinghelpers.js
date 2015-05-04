Template.settingsTemplate.helpers({
	settings: function(){
		return SettingsList.find();
	},
	settingTypeIs: function(inputType){
		return this.inputType === inputType;
	},
	timeZ: function(isSelected){
		return this.isSelected ===  isSelected;
	},


});

Template.settingsTempUnitsDropdown.helpers({
  tempSelectIs: function(unitsForTemp){
		return this.unitsForTemp ===  unitsForTemp;
	}

});


Template.settingsTemplate.events({
	"click .toggle-checked": function () {
		Meteor.call("toggleChecked", this._id, ! this.isChecked );

	},
	"click .tempurature": function(){
		var unitsTemp = $('#tempSelect').val();

		console.log(unitsTemp);
		Meteor.call('setTempUnit', this._id, unitsTemp);
	},
	"click .timeZone": function(){

		//console.log(this.timeZ.label);
		//Meteor.call('testinsert', this._id);
		//need to get inner value of timeZ if it's true or false
		//Meteor.call("setTZ", this._id, this.isChecked, this.value);
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

  //deploys the initial settings to the DB
	"click .DeploySettings": function () {
		Meteor.call('gettingStartedDeploySettings');
	}
});
