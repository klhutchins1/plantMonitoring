Meteor.methods( {
	saveGarden: function (isNew, gardenName, length, width, monitored, automated, gardenId) {
		//check for valid info using reactiveraven.github.io/jqBootstrapValidation/ for htmp
    //still needs serverside validation
    if (gardenName.length >= 25 || gardenName.length < 0) {
     console.log("GardenName is too long with " + gardenName.length + " characters");
		 return false;
	  } else if ((length > 20 || length < 1) && (length != '')) {
      console.log("GardenLength is out of range at " + length);
			return false;
    } else if ((width > 20 || length < 1) && (length != '')) {
      console.log("gardenWidth is out of range at " + width);
			return false;
    } else if (monitored != true && monitored != false) {
      console.log("Gardenmonitored is out of range at " + monitored);
			return false;
    } else if  (automated != true && automated != false) {
      console.log("Gardenautomated is out of range at " + automated);
			return false;
    }else if (isNew) {
			console.log("GardensList inserted");
			//creates a new garden
	    GardensList.insert( {
				gardenName: gardenName,
				createdAt: new Date(),
	      editedAt: new Date(),
	      gardenLength: length,
	      gardenWidth: width,
	      isMonitored: monitored,
	      isAutomatied: automated
			} );

		} else if (! isNew ) {
			console.log("GardensList updated");
			//updating existing garden
			GardensList.update(gardenId, { $set:  {
				gardenName: gardenName,
				editedAt: new Date(),
				gardenLength: length,
				gardenWidth: width,
				isMonitored: monitored,
				isAutomatied: automated
				}
			} );
		}
	},




  removeGarden: function (garden){
     GardensList.remove( { _id: garden._id } );
  }



} );
