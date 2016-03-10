Template.toggleLED.events( {
	"click #ledButton": function () {
    Meteor.call("toggleLED", this._id, ! this.isChecked );
	}

} );
