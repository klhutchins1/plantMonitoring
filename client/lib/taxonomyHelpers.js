Meteor.subscribe('taxonomy', function(){
  //console.log( "taxonomy data ready." );
});

Template.taxonomyListTemplate.helpers( {
	taxonomy: function () {
		return TaxonomyList.find();
	}
} );

Template.createTaxonomyTemplate.rendered = function() {
	this.$('.ui.checkbox').checkbox();
};
