Template.createPlants.helpers({
	plants: function() {
		return PlantsList.find();
	},
	plantsCount: function () {
		return PlantsList.find().count();
	}
});

Template.createPlants.events({
	"submit .new-plant": function(event){
		var plantName = event.target.plantNameForm.value;
    var length = event.target.lengthForm.value;
    var width = event.target.widthForm.value;
    var monitored = event.target.monitoredCheckbox.value;
    var automated = event.target.automatedCheckbox.value;
		Meteor.call('addPlant', plantName, length, width, monitored, automated);
		return false;
	}
});
