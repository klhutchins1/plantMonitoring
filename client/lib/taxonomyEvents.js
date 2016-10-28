Template.createTaxonomyTemplate.events( {
	"submit #new-taxonomy": function (event) {
		var taxonomyName = event.target.taxonomyNameForm.value;
    var binomial = event.target.taxonomyBinomialNameForm.value;
    var kingdom = event.target.taxonomyKingdomForm.value;
    var order = event.target.taxonomyOrderForm.value;
    var family = event.target.taxonomyFamilyForm.value;
    var genus = event.target.taxonomyGenusForm.value;
    var species = event.target.taxonomySpeciesForm.value;
    var variety = event.target.taxonomyVarietyForm.value;
    var image = event.target.taxonomyImageForm.value;
		var isNew = true;
		Meteor.call('saveTaxonomy', isNew, taxonomyName, binomial, kingdom, order,
                family, genus, species, variety, image, isNew, null);
		return false;
	}
} );


Template.editTaxonomyDetailsTemplate.events( {
	"submit #save-taxonomy": function (event) {
    var taxonomyName = event.target.taxonomyNameForm.value;
    var binomial = event.target.taxonomyBinomialNameForm.value;
    var kingdom = event.target.taxonomyKingdomForm.value;
    var order = event.target.taxonomyOrderForm.value;
    var family = event.target.taxonomyFamilyForm.value;
    var genus = event.target.taxonomyGenusForm.value;
    var species = event.target.taxonomySpeciesForm.value;
    var variety = event.target.taxonomyVarietyForm.value;
    var image = event.target.taxonomyImageForm.value;
		var isNew = false;
		Meteor.call('saveTaxonomy', isNew, taxonomyName, binomial, kingdom, order,
                family, genus, species, variety, image, isNew, this._id);
		return false;
	},



	"click #deletetaxonomy": function (event){
    var taxonomy = taxonomysList.findOne(this._id);
    var del = confirm("Are you sure you want to Delete?");
    if (del == true){
      Meteor.call('removeTaxonomy', taxonomy);
      Router.go('taxonomys.show');
    }else{
			Router.go('taxonomys.show');
    }
  }
} );
