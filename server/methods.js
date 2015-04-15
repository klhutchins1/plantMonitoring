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
	
	saveDropDown: function(settingId ){
		SettingsList.update(settingId)
	},

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
			isChecked: true,
			

		},
		{
			name: "Automated Garden", 
			inputType: "checkbox",
			isChecked: true

		},
		{
			name: "Monitor Air Temperature", 
			inputType: "checkbox",
			isChecked: true

		},
		{
			name: "Monitor Soil Temperature", 
			inputType: "checkbox",
			isChecked: false

		},
		{
			name: "Monitor Soil Moisture", 
			inputType: "checkbox",
			isChecked: true

		},
		{
			name: "Monitor Light Lumens", 
			inputType: "checkbox",
			isChecked: true

		},
		{
			name: "Monitor Humidity", 
			inputType: "checkbox",
			isChecked: false

		},
		{
			name: "Monitor Wind", 
			inputType: "checkbox",
			isChecked: true

		},
		{
			name: "Temperature Units", 
			inputType: "tempSelect",
			unitsForTemp: "Fahrenheit"

		},
		{
			name: "Time Zone", 
			inputType: "tzSelect",
			timeZ: "Mountain"
			//option: {"PST","MST","CST","EST"}

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
		
		//bulk add is not available yet in Meteor
		_.each(initSettings, function(doc) { 
			SettingsList.insert(doc);
		});
	}
	
});