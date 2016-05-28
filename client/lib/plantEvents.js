//gets form info to create the plants and calls the addPlant method on the server to add data to DB
Template.createPlantsTemplate.events( {
	"submit #new-plant": function (event) {
		var plantName = event.target.plantNameForm.value;
    var length = event.target.plantLengthForm.value;
    var width = event.target.plantWidthForm.value;
    var monitored = event.target.plantMonitoredCheckbox.value;
    var automated = event.target.plantAutomatedCheckbox.value;
    var water = event.target.plantWaterForm.value;
    var airTemp = event.target.plantAirTempForm.value;
    var soilTemp = event.target.plantSoilTempForm.value;
    var light = event.target.plantLightForm.value;
    var humidity = event.target.plantHumidityForm.value;
    var wind = event.target.plantWindForm.value;
		var memberOfGarden = event.target.memberOfGardenForm.value;
		Meteor.call('addPlant', plantName, length, width, monitored,
                automated, water, airTemp, soilTemp, light, humidity, wind, memberOfGarden);
		return false;
	}
} );

//gets form info to create the plants and calls the addPlant method on the server to add data to DB
Template.editPlantDetailsTemplate.events( {
	"submit #new-plant": function (event) {
		var plantName = event.target.plantNameForm.value;
    var length = event.target.plantLengthForm.value;
    var width = event.target.plantWidthForm.value;
    var monitored = event.target.plantMonitoredCheckbox.value;
    var automated = event.target.plantAutomatedCheckbox.value;
    var water = event.target.plantWaterForm.value;
    var airTemp = event.target.plantAirTempForm.value;
    var soilTemp = event.target.plantSoilTempForm.value;
    var light = event.target.plantLightForm.value;
    var humidity = event.target.plantHumidityForm.value;
    var wind = event.target.plantWindForm.value;
		var memberOfGarden = event.target.memberOfGardenForm.value;
		Meteor.call('addPlant', plantName, length, width, monitored,
                automated, water, airTemp, soilTemp, light, humidity, wind, memberOfGarden);
		return false;
	}
} );


//call server function removePlant when deletePlant is clicked
Template.editPlantDetailsTemplate.events( {
  "click #deletePlant": function (event) {
    var plant = PlantsList.findOne(this._id);
    var del = confirm("Are you sure you want to Delete?");
    if (del == true){
      Meteor.call('removePlant', plant);
      Router.go('plants.show');
    }else{

    }
  }

} );
