Meteor.methods({
		
	gettingStarted: function(){
		if (SettingsList.find().count() == 0){
			console.log("");
			
		}
	}
	

});