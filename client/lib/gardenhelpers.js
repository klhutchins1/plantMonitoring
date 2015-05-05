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
    var length = event.target.lengthForm.value;
    var width = event.target.widthForm.value;
    var monitored = event.target.monitoredCheckbox.value;
    var automated = event.target.automatedCheckbox.value;
		Meteor.call('addGarden', gardenName, length, width, monitored, automated);
		return false;
	}
});

