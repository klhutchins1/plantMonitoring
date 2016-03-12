Template.LEDTemplate.events( {
	"click #buttonLedON": function () {
    Meteor.call("OnLED");
	},
	"click #buttonLedOff": function () {
    Meteor.call("OffLED");
	}

} );
