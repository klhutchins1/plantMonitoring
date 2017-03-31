Meteor.subscribe('settings', function(){
  //console.log( "settings data ready." );
});



Template.settingsTemplate.helpers( {
	//timeZ: function (isSelected) {
	//	return this.isSelected === isSelected;
	//},

} );

//there's a bug where the current setting is not loading from the DB, unless
//refreshed totally. leave page and come back it doesn't work.
Template.temperatureUnitSelectTemplate.helpers( {
	tempUnitIs: function() {
		var unitsofTemp = SettingsList.findOne({inputType: "tempSelect"}).unitsForTemp;
		console.log("This should match what's on the screen", unitsofTemp);
		return unitsofTemp;
	},
});


//Template.temperatureUnitSelectTemplate.onRendered(function () {
//	this.$('select').material_select();
//});
