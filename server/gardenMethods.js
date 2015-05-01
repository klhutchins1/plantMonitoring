Meteor.methods({
	addGarden: function (gardenName) {
		GardensList.insert({
			gardenName: gardenName,
			createdAt: new Date()
		});
	}



});