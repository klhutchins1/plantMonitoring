Router.map(function(){
	this.route('homeRoute', {path: '/'} );
	this.route('gettingStartedRoute', {path: '/gettingStarted/'} );
	this.route('settingsRoute', {path: '/settings/'} );
});

PlantList = new Mongo.Collection("plants");
GardensList = new Mongo.Collection("gardens");
SettingsList = new Mongo.Collection("settings");

if (Meteor.isClient) {

	Template.gardens.helpers({
		gardens: function () {
			return GardensList.find();
		},
		gardensCount: function () {
			return GardensList.find().count();
		}
	});
  
	Template.gardens.events({
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
		}

	});
	
	Template.settingsRoute.events({
		"click .toggle-checked": function () {
			//console.log(this.isChecked)
			Meteor.call("toggleChecked", this._id, ! this.isChecked );
			
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
	

	
}



if (Meteor.isServer) {
	Meteor.methods({
		addGarden: function (gardenName) {
			GardensList.insert({
				gardenName: gardenName,
				createdAt: new Date()
			});
		},
		
		createSettings: function(settingNameVar){
			//ensure setting name has value, serverSide check
			if(settingNameVar == ""){
				console.log("User did not enter a Setting Name, but tried to push data outside of regular checks");
			}else{
				SettingsList.insert({
				name: settingNameVar, 
				isChecked: false

				});
			}

		},
		
		modifySettings: function(selectedSetting, settingValue){
			console.log("NOTHING");
			Meteor.call('gettingStartedDeploySettings');
			
		},
		
		//Meteor.call("setChecked", this._id, selectedSetting);
		//SettingsList.update({_id:"AKKt96R8zzcuy4ejf"},{$set: {isChecked: ! this.checked}})
		toggleChecked: function (settingId, setChecked) {
			SettingsList.update(settingId, {$set:  {isChecked: setChecked}} );
		},
		
		gettingStarted: function(){
			if (SettingsList.find().count() == 0){
				console.log("");
				
			}
		},
		
		gettingStartedDeploySettings: function(){
			var initSettings = [{
			name: "Collect Data", 
				inputType: "checkbox",
				isChecked: true

			},
			{
				name: "Control Data", 
				inputType: "checkbox",
				isChecked: true

			},
			{
				name: "Collect Air Temperature", 
				inputType: "checkbox",
				isChecked: true

			},
			{
				name: "Collect Soil Temperature", 
				inputType: "checkbox",
				isChecked: false

			},
			{
				name: "Collect Soil Moisture", 
				inputType: "checkbox",
				isChecked: true

			},
			{
				name: "Collect Light", 
				inputType: "checkbox",
				isChecked: true

			},
			{
				name: "Collect Humidity", 
				inputType: "checkbox",
				isChecked: false

			},
			{
				name: "Collect Wind", 
				inputType: "checkbox",
				isChecked: true

			},
			{
				name: "Tempurature Units", 
				inputType: "dropdown",
				unitsForTemp: ""

			},
			{
				name: "Time Zone", 
				inputType: "dropdown",
				timeZ: ""

			},
			{
				name: "Latitude", 
				inputType: "form",
				lat: ""

			},
			{
				name: "Longitude", 
				inputType: "form",
				log: ""
			}
			];
			
			//bulk add is not available yet
			_.each(initSettings, function(doc) { 
				SettingsList.insert(doc);
			});
		}
		
	});
}