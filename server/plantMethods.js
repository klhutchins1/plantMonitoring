Meteor.methods({
	addPlant: function (plantName, length, width, monitored, automated) {
    //check for valid info using reactiveraven.github.io/jqBootstrapValidation/ for htmp


		PlantsList.insert({
			plantName: plantName,
			createdAt: new Date(),
      editedAt: new Date(),
      plantLength: length,
      plantWidth: width,
      isMonitored: monitored,
      isAutomatied: automated

		});
	}



});
