Template.LEDTemplate.events( {
	"click #buttonLedON": function () {
    Meteor.call("OnLED");
	},
	"click #buttonLedOff": function () {
    Meteor.call("OffLED");
	}

} );



Template.readTempTemplate.events( {
	"click #buttonfortemp": function () {
    Meteor.call('readTemp', function(err, response){
			Session.set('temperature', response);
		});
		//return this.Temperature ===  Temperature;
	},


} );
