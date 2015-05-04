Meteor.methods({
	addPlant: function (plantName) {
		PlantsList.insert({
			plantName: plantName,
			createdAt: new Date()
		});
	}



});
