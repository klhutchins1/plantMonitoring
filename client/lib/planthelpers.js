Template.createPlants.helpers({
	plantsCount: function () {
		return PlantsList.find().count();
	}
});


Template.plantList.helpers({
	plants: function() {
		return PlantsList.find();
	}
});


//gets form info to create the plants and calls the addPlant method on the server to add data to DB
Template.createPlants.events({
	"submit #new-plant": function(event){
		var plantName = event.target.plantNameForm.value;
    var length = event.target.lengthForm.value;
    var width = event.target.widthForm.value;
    var monitored = event.target.monitoredCheckbox.value;
    var automated = event.target.automatedCheckbox.value;
    var water = event.target.waterForm.value;
    var airTemp = event.target.airTempForm.value;
    var soilTemp = event.target.soilTempForm.value;
    var light = event.target.lightForm.value;
    var humidity = event.target.humidityForm.value;
    var wind = event.target.windForm.value;
		Meteor.call('addPlant', plantName, length, width, monitored,
                automated, water, airTemp, soilTemp, light, humidity, wind);
		return false;
	}
});

//call server function removePlant when deletePlant is clicked
Template.editPlantDetailsTemplate.events({
  "click #deletePlant": function(event){
    var plant = PlantsList.findOne(this._id);
    var del = confirm("Are you sure you want to Delete?");
    if (del == true){
      Meteor.call('removePlant', plant);
      Router.go('plants.show');
    }else{

    }



  }

});
