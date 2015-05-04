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
		Meteor.call('addPlant', plantName);
		return false;
	}
});
