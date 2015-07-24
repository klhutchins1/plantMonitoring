Template.createGardensTemplate.helpers( {
	gardensCount: function () {
		return GardensList.find().count();
	}
} );

Template.gardenListTemplate.helpers( {
	gardens: function () {
		return GardensList.find();
	}
} );


Template.createGardensTemplate.events( {
	"submit #new-garden": function (event) {
		var gardenName = event.target.gardenNameForm.value;
    var length = event.target.gardenLengthForm.value;
    var width = event.target.gardenWidthForm.value;
    var monitored = event.target.gardenMonitoredCheckbox.value;
    var automated = event.target.gardenAutomatedCheckbox.value;
		Meteor.call('addGarden', gardenName, length, width, monitored, automated);
		return false;
	}
} );


Template.editGardenDetailsTemplate.events( {
  "click #deleteGarden": function (event){
    var garden = GardensList.findOne(this._id);
    var del = confirm("Are you sure you want to Delete?");
    if (del == true){
      Meteor.call('removeGarden', garden);
      Router.go('gardens.show');
    }else{

    }
  }
} );
