Meteor.methods({
	addGarden: function (gardenName, length, width, monitored, automated) {
		//check for valid info using reactiveraven.github.io/jqBootstrapValidation/ for htmp
    //still needs serverside validation
    if(gardenName.length >= 25){
     console.log("GardenName is too long at " + gardenName.length);
    }
    if(length > 20 || length < 1){
      console.log("GardenLength is out of range at " + length);
    }
    if(width > 20 || length < 1){
      console.log("gardenWidth is out of range at " + width);
    }
    if(monitored != true || monitored != false){
      console.log("Gardenmonitored is out of range at " + monitored);
    }
    if(automated != true || automated !=false){
      console.log("Gardenautomated is out of range at " + automated);
    }

    //need to move this into the if/else cause right now it's putting the data in the no matter the above chekc
    GardensList.insert({
			gardenName: gardenName,
			createdAt: new Date(),
      editedAt: new Date(),
      gardenLength: length,
      gardenWidth: width,
      isMonitored: monitored,
      isAutomatied: automated

		});

	},

  removeGarden: function (garden){
     GardensList.remove({ _id: garden._id});
  }



});
