Meteor.subscribe('latestTemps', function(){
  console.log( "latestTemps data ready." );
});


Template.hardwareActivateTemplate.events( {
	"click #buttonLedON": function () {
    Meteor.call("OnLED");
	},
	"click #buttonLedOff": function () {
    Meteor.call("OffLED");
	},
	"click #buttonforTempID": function () {
		Meteor.call('oneWireDevices');
	},
	"click #buttonfortemp": function () {
		Meteor.call('readTemp');
	},
	"click #buttonforDHT11": function () {
		Meteor.call('readDHT11');
	},

} );


Template.readTempIDTemplate.helpers( {
	showTempID: function () {
		 return Meteor.call('oneWireDevices');
	},
	showTemp: function () {
		 //get latest Temp and return it in celsius
		 var temp = GardensLogList.findOne();
		 return temp && temp.celsius;
	}
} );
