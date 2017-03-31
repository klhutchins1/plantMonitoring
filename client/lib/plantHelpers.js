Meteor.subscribe('plants', function(){
  console.log( "plants data ready." );
});

Template.createPlantsTemplate.helpers( {
	plantsCount: function () {
		return PlantsList.find().count();
	}
} );

Template.plantListTemplate.helpers( {
	plants: function() {
		return PlantsList.find();
	},
} );


Template.createPlantsTemplate.helpers( {
	gardens: function() {
		return GardensList.find();
	},
} );

Template.editPlantDetailsTemplate.helpers( {
	gardens: function() {
		return GardensList.find();
	},
} );




Template.createPlantsTemplate.rendered = function() {
	this.$('.ui.accordion').accordion();
	this.$('.ui.checkbox').checkbox();
};

Template.editPlantDetailsTemplate.rendered = function() {
	this.$('.ui.accordion').accordion();
	this.$('.ui.checkbox').checkbox();
};
