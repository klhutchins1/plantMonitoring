Template.createGardenTemplate.events( {
	"submit #new-garden": function (event) {
		var gardenName = event.target.gardenNameForm.value;
    var length = event.target.gardenLengthForm.value;
    var width = event.target.gardenWidthForm.value;
    var monitored = event.target.gardenMonitoredCheckbox.checked;
    var automated = event.target.gardenAutomatedCheckbox.checked;
		var isNew = true;
		Meteor.call('saveGarden', isNew, gardenName, length, width, monitored, automated, null);
		return false;
	}
} );


Template.editGardenDetailsTemplate.events( {
	"submit #save-garden": function (event) {
		var gardenName = event.target.gardenNameForm.value;
		var length = event.target.gardenLengthForm.value;
		var width = event.target.gardenWidthForm.value;
		var monitored = event.target.gardenMonitoredCheckbox.checked;
		var automated = event.target.gardenAutomatedCheckbox.checked;
		var isNew = false;
		Meteor.call('saveGarden', isNew, gardenName, length, width, monitored, automated,
								this._id);
		return false;
	},



	"click #deleteGarden": function (event){
    var garden = GardensList.findOne(this._id);
    var del = confirm("Are you sure you want to Delete?");
    if (del == true){
      Meteor.call('removeGarden', garden);
      Router.go('gardens.show');
    }else{
			Router.go('plants.show');
    }
  }
} );
