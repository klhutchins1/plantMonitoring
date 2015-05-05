Meteor.methods({
	addGarden: function (gardenName, length, width, monitored, automated) {
		//check for valid info using reactiveraven.github.io/jqBootstrapValidation/ for htmp


    GardensList.insert({
			gardenName: gardenName,
			createdAt: new Date(),
      editedAt: new Date(),
      gardenLength: length,
      gardenWidth: width,
      isMonitored: monitored,
      isAutomatied: automated

		});
	}



});
