Meteor.methods({


	saveSettings: function (temperatureUnits) {
		if (temperatureUnits == "Celsius" || temperatureUnits == "Fahrenheit") {
			SettingsList.update({inputType: "tempSelect"}, { $set:  { unitsForTemp: temperatureUnits } } );
		} else {
			console.log("Units of Temp is not valid. Needs to be Celsius or Fahrenheit")
		}

	},

});
