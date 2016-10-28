Meteor.subscribe('gardens', function(){
  //console.log( "gardens data ready." );
});

Template.createGardenTemplate.helpers( {
	gardensCount: function () {
		return GardensList.find().count();
	}
} );

Template.gardenListTemplate.helpers( {
	gardens: function () {
		return GardensList.find();
	}
} );




Template.createGardenTemplate.rendered = function() {
	this.$('.ui.checkbox').checkbox();
};

Template.editGardenDetailsTemplate.rendered = function() {
	this.$('.ui.checkbox').checkbox();
};
