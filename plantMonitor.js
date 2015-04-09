Router.map(function(){
	this.route('homeRoute', {path: '/'} );
	this.route('gettingStartedRoute', {path: '/gettingStarted'} );
	this.route('settings', {path: '/settings'} );
});

Plant = new Mongo.Collection("plant");
Gardens = new Mongo.Collection("gardens");
SettingsList = new Mongo.Collection("settings");

if (Meteor.isClient) {
	Template.gardens.helpers({
		gardens: function () {
			return Gardens.find();
		},
		gardensCount: function () {
			return Gardens.find().count();
		}
	});
  
	Template.gardens.events({
		"submit .new-garden": function(event){
			var gardenName = event.target.gardenNameForm.value;
			console.log(gardenName);
			Meteor.call('addGarden', gardenName);
			event.target.gardenNameForm.value = "";
			return false;
		} 
	});
	
	Template.settings.helpers({
		'setting': function(){
			return SettingsList.find().fetch();
		}

	});
	
	Template.settings.events({
		"click .toggle-checked": function () {
			var selectedSetting = Session.get('selectedSetting');
			console.log(selectedSetting);
			SettingsList.update(selectedSetting, {$set:  {value: ! this.checked}} );
		}
	});
}



if (Meteor.isServer) {
	Meteor.methods({
		addGarden: function (gardenName) {
			Gardens.insert({
				gardenName: gardenName,
				createdAt: new Date()
			});
		},
		
		createSettings: function(settingNameVar,isChecked){
			SettingsList.insert({
				name: settingNameVar, 
				isChecked: isChecked

			});
		},
		
		modifySettings: function(selectedSetting, settingValue){
			console.log(selectedSetting, settingValue);
			
			
		}
		
		
		
	});
}