Meteor.subscribe('settings', function(){
  //console.log( "settings data ready." );
});



Template.settingsTemplate.events( {
	"submit #settingsForm": function (event) {
		var temperatureUnits = event.target.tempUnitSelect.value;//is good
		Meteor.call("saveSettings", temperatureUnits);
		return false;
	}
});





Template.temperatureUnitSelectTemplate.onRendered(function () {
	this.$('select').material_select();
});
