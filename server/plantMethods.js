Meteor.methods({
	addPlant: function (plantName, length, width, monitored, automated,  airTemp, soilTemp, light, humidity, wind) {
    //check for valid info using reactiveraven.github.io/jqBootstrapValidation/
    //still needs serverside validation


		PlantsList.insert({
			plantName: plantName,
			createdAt: new Date(),
      editedAt: new Date(),
      plantLength: length,
      plantWidth: width,
      isMonitored: monitored,
      isAutomatied: automated,
      airTemp: airTemp,
      soilTemp: soilTemp,
      light: light,
      humidity: humidity,
      wind: wind

		});
	}



});
