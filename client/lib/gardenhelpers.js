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
		//console.log(gardenName);
		Meteor.call('addGarden', gardenName);
		return false;
	} 
});


