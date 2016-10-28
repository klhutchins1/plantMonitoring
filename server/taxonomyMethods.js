Meteor.methods( {
	saveTaxonomy: function (isNew, taxonomyName, binomial, kingdom, order,
                family, genus, species, variety, image, isNew,  taxonomyId) {
		//check for valid info using reactiveraven.github.io/jqBootstrapValidation/ for htmp
    if (taxonomyName.length >= 25 || taxonomyName.length < 0) {
     console.log("taxonomyName is too long with " + taxonomyName.length + " characters");
		 return false;
   } else if ((binomial.length > 20 || binomial.length < 1) && (binomial.length != '')) {
      console.log("binomial is out of range at " + binomial.length);
			return false;
    } else if ((kingdom.length > 20 || kingdom.length < 1) && (kingdom.length != '')) {
      console.log("kingdom is out of range at " + kingdom.length);
			return false;
    } else if ((order.length > 20 || order.length < 1) && (order.length != '')) {
      console.log("order is out of range at " + order.length);
			return false;
    } else if  ((family.length > 20 || family.length < 1) && (family.length != '')) {
      console.log("family is out of range at " + family.length);
			return false;
    } else if  ((genus.length > 20 || genus.length < 1) && (genus.length != '')) {
      console.log("genus is out of range at " + genus.length);
      return false;
    } else if  ((species.length > 20 || species.length < 1) && (species.length != '')) {
      console.log("species is out of range at " + species.length);
      return false;
    } else if  ((variety.length > 20 || variety.length < 1) && (variety.length != '')) {
      console.log("variety is out of range at " + variety.length);
      return false;
    } else if  ((image.length > 20 || image.length < 1) && (image.length != '')) {
      console.log("image is out of range at " + image.length);
      return false;
    }else if (isNew) {
			//creates a new garden
	    TaxonomyList.insert( {
				taxonomyName: taxonomyName,
				createdAt: new Date(),
	      editedAt: new Date(),
        binomial: binomial,
        kingdom: kingdom,
        order: order,
        family: family,
        genus: genus,
        species: species,
        variety: variety,
        image: image
			} );
			console.log("TaxonomysList inserted");

		} else if (! isNew ) {
			console.log("TaxonomyList updated");
			//updating existing garden
			TaxonomyList.update(taxonomyId, { $set:  {
				taxonomyName: taxonomyName,
				editedAt: new Date(),
        binomial: binomial,
        kingdom: kingdom,
        order: order,
        family: family,
        genus: genus,
        species: species,
        variety: variety,
        image: image
        }
      } );
		}
	},


  removeTaxonomy: function (taxonomy){
     TaxonomyList.remove( { _id: taxonomy._id } );
  }



} );
