Template.toggleLED.events( {
	"click #ledButton": function () {
    led.writeSync(1);
    Meteor.call("toggleLED", this._id, ! this.isChecked );
	}

} );
