Meteor.methods({
	addPlant: function (plantName, length, width, monitored, automated, water, airTemp, soilTemp, light, humidity, wind) {
    //check for valid info using reactiveraven.github.io/jqBootstrapValidation/
    //still needs serverside validation

    if(plantName.length >= 25){
      console.log("PlantName is too long at " + plantName.length);
    }
    if(length){
      console.log("PlantLength is out of range at " + length);
    }
    if(width > 100 || width < 1){
      console.log("PlantWidth is out of range at " + width);
    }
    if(monitored != true || monitored != false){
      console.log("PlantMonitored is out of range at " + monitored);
    }
    if(automated != true || monitored != false){
      console.log("PlantAutomated is out of range at " + automated);
    }
    if(water >= 100 || water <=0){
      console.log("PlantWater is out of range at " + water);
    }
    if(airTemp >= 200 || airTemp <= 200){
      console.log("PlantAirTemp is out of range at " + airTemp);
    }
    if(soilTemp >= 200 || soilTemp <= 200){
      console.log("PlantSoilTemp is out of range at " + soilTemp);
    }
    if(light >= 7000 || light <= 0){
      console.log("PlantLight is out of range at " + light);
    }
    if(humidity >= 100 || humidity <= 0){
      console.log("PlantHumidity is out of range at " + humidity);
    }
    if(wind >=200 || wind <= 0){
      console.log("PlantWind is out of range at " + wind);
    }

    //need to move this into the if loop
		PlantsList.insert({
			plantName: plantName,
			createdAt: new Date(),
      editedAt: new Date(),
      plantLength: length,
      plantWidth: width,
      isMonitored: monitored,
      isAutomatied: automated,
      water: water,
      airTemp: airTemp,
      soilTemp: soilTemp,
      light: light,
      humidity: humidity,
      wind: wind

		});
	},

  removePlant: function (plant){
    PlantsList.remove({ _id: plant._id});
  }



});
