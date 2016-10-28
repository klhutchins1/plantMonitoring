//gets form info to create the plants and calls the addPlant method on the server to add data to DB
Template.createPlantsTemplate.events( {
	//"click .toggle-checked": function () {
	//	Meteor.call("toggleChecked", this._id, ! this.isChecked );
  //},
	"submit #new-plant": function (event) {
		var plantName = event.target.plantNameForm.value;
    var length = event.target.plantLengthForm.value;
    var width = event.target.plantWidthForm.value;
    var monitored = event.target.plantMonitoredCheckbox.checked;
    var automated = event.target.plantAutomatedCheckbox.checked;
    var water = event.target.plantWaterForm.value;
    var airTemp = event.target.plantAirTempForm.value;
    var soilTemp = event.target.plantSoilTempForm.value;
    var light = event.target.plantLightForm.value;
    var humidity = event.target.plantHumidityForm.value;
    var wind = event.target.plantWindForm.value;
		var memberOfGarden = event.target.memberOfGardenForm.value;
		var isNew = true;
		Meteor.call('savePlant', isNew, plantName, length, width, monitored,
                automated, water, airTemp, soilTemp, light, humidity,
								wind, memberOfGarden, null);
		return false;
	}
} );

//gets form info to create the plants and calls the addPlant method on the server to add data to DB
Template.editPlantDetailsTemplate.events( {
	//"click .toggle-checked": function () {
	//	Meteor.call("toggleChecked", this._id, ! this.isChecked );
	//},
	"submit #savePlant": function (event) {
		var plantName = event.target.plantNameForm.value;
    var length = event.target.plantLengthForm.value;
    var width = event.target.plantWidthForm.value;
    var monitored = event.target.plantMonitoredCheckbox.checked;
    var automated = event.target.plantAutomatedCheckbox.checked;
    var water = event.target.plantWaterForm.value;
    var airTemp = event.target.plantAirTempForm.value;
    var soilTemp = event.target.plantSoilTempForm.value;
    var light = event.target.plantLightForm.value;
    var humidity = event.target.plantHumidityForm.value;
    var wind = event.target.plantWindForm.value;
		var memberOfGarden = event.target.memberOfGardenForm.value;
		var isNew = false;
		Meteor.call('savePlant', isNew, plantName, length, width, monitored,
                automated, water, airTemp, soilTemp, light, humidity,
								wind, memberOfGarden, this._id);
		return false;
	},



	"click #deletePlant": function (event) {
    var plant = PlantsList.findOne(this._id);
    var del = confirm("Are you sure you want to Delete?");
    if (del == true){
      Meteor.call('removePlant', plant);
      Router.go('plants.show');
    }else{
			Router.go('plants.show');
    }
  }

} );
