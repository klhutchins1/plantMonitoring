Template.createGardens.helpers({
	gardens: function () {
		return GardensList.find();
	},
	gardensCount: function () {
		return GardensList.find().count();
	}
});

Template.createGardens.events({
	"submit .new-garden": function(event){
		var gardenName = event.target.gardenNameForm.value;
		Meteor.call('addGarden', gardenName);
		return false;
	}
});


