Template.readTemp.events( {
	"click #buttonfortemp": function (event) {
		Meteor.call('readInput');
		return false;
	}
} );
