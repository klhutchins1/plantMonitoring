Meteor.subscribe('gardens', function(){
  //console.log( "gardens data ready." );
});

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
