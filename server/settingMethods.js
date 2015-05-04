Meteor.methods({

	//custom settings probably wont be used
	createSettings: function(settingNameVar){
		//ensure setting name has value, serverSide check
		if(settingNameVar == ""){
			console.log("User did not enter a Setting Name, but tried to push data outside of regular checks");
		}else{
			SettingsList.insert({
				name: settingNameVar,
        inputType: "checkbox",
				isChecked: false
			});
		}
	},

	//sets the units for how temperature is displayed, ensuing that
	setTempUnit: function(settingId, units){
		if (units == 'Celsius' || units == 'Fahrenheit'){
			SettingsList.update(settingId, {$set:  {unitsForTemp: units}} );
		}else{
			console.log("Units of Temp is not valid. Needs to be Celsius or Fahrenheit")
		}
	},


	//setTZ: function(settingId, isSelected){
	//	SettingsList.update(settingId, {$set: {timeZ: {isSelected: true }}} );
	//},

	//Toggles and save checkbox values to DB
	toggleChecked: function (settingId, setChecked) {
		if (setChecked == true || setChecked == false){
			SettingsList.update(settingId, {$set:  {isChecked: setChecked}} );
		}else{
			console.log("setChecked is not valid. Needs to be true or false")
		}

	}

});
