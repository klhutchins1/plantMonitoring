Meteor.methods({
	savePlant: function (isNew, plantName, length, width, monitored, automated, water,
											airTemp, soilTemp, light, humidity, wind, garden, plantId) {

		//console.log(isNew + ' ' +  plantName + ' ' + length+ ' ' + width + ' ' +monitored + ' ' + automated + ' ' + water + ' ' + airTemp + ' '+ soilTemp + ' ' + light + ' ' + humidity + ' ' + wind + ' '+ garden + ' ' + plantId);
    //check for valid info using reactiveraven.github.io/jqBootstrapValidation/
    //still needs serverside validation

    if (plantName.length >= 25 || plantName.length < 0) {
      console.log("PlantName is too long with " + plantName.length + " characters");
			return false;
    } else if ((length >= 100) || (length <= 0) && (length != '')) {
      console.log("PlantLength is out of range at " + length);
			return false;
    } else if ((width >= 100) || (width <= 0) && (width != '')) {
      console.log("PlantWidth is out of range at " + width);
			return false;
    } else if (monitored != true && monitored != false ) {
      console.log("PlantMonitored is out of range at " + monitored);
			return false;
    } else if (automated != true && automated != false ) {
      console.log("PlantAutomated is out of range at " + automated);
			return false;
    } else if ((water >= 100) || (water <= 0) && (water != '')) {
      console.log("PlantWater is out of range at " + water);
			return false;
    } else if ((airTemp >= 200) || (airTemp <= 0) && (airTemp != '')) {
      console.log("PlantAirTemp is out of range at " + airTemp);
			return false;
    } else if ((soilTemp >= 200) || (soilTemp <= 0) && (soilTemp != '')) {
      console.log("PlantSoilTemp is out of range at " + soilTemp);
			return false;
    } else if ((light >= 7000) || (light <= 0) && (light != '')) {
      console.log("PlantLight is out of range at " + light);
			return false;
    } else if ((humidity >= 100) || (humidity <= 0) && (humidity != '')) {
      console.log("PlantHumidity is out of range at " + humidity);
			return false;
    } else if ((wind >= 200) || (wind <= 0) && (wind != '')) {
      console.log("PlantWind is out of range at " + wind);
			return false;
		}else if (isNew) {
			console.log("PlantsList inserted");
			//creates a new plant
			PlantsList.insert( {
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
				wind: wind,
				memberOfGarden: garden
			} );
		} else if (! isNew ) {
			console.log("PlantsList updated");
			//updating existing plants
			PlantsList.update( plantId, { $set:  {
				plantName: plantName,
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
				wind: wind,
				memberOfGarden: garden}
			} );
		}
	},

  removePlant: function (plant) {
    PlantsList.remove( { _id: plant._id});
  }



});
