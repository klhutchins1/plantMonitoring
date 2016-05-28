Meteor.subscribe('latestTemps', function(){
  //console.log( "latestTemps data ready." );
});

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
    Meteor.call('readTemp');
	},


} );

Template.readTempIDTemplate.events( {
	"click #buttonforTempID": function () {
    Meteor.call('oneWireDevices');
	},


} );

Template.readTempIDTemplate.helpers( {
	showTempID: function () {
		 
		 return Meteor.call('oneWireDevices');
	}
} );


Template.readTempTemplate.helpers( {
	showTemp: function () {
		 //get latest Temp and return it in celsius
		 var temp = GardensLogList.findOne();
		 return temp && temp.celsius;
	}
} );
