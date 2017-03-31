Meteor.subscribe('devices', function(){
  console.log( "devices data ready." );
});


Template.deviceListTemplate.helpers({
  devices: function() {
    return DevicesList.find();

    //return DevicesList.find();
  },
});

//Template.createDeviceTemplate.helpers({
//  protocolSelect: function(){
//    protocol ["1Wire", "I2C"]
//  }
//});
