//adds GPIO for the raspi
Meteor.methods({
  //https://github.com/fivdi/onoff
  OnLED: function (){
    if (Meteor.npmRequire('os').arch() === 'arm'){
      var GPIO = Meteor.npmRequire('onoff').Gpio;
      led = new GPIO(17, 'out');
      led.write(1);
      console.log('LED is now ON');
    }else{
      console.log('OS does not have epoll so, LED cant change');
    }
  },
  OffLED: function (){
    if (Meteor.npmRequire('os').arch() === 'arm'){
      var GPIO = Meteor.npmRequire('onoff').Gpio;
      led = new GPIO(17, 'out');
      led.write(0);
      console.log('LED is now OFF');
    }else{
      console.log('OS does not have epoll so, LED cant change');
    }
  },

  readLight: function (){
    if (Meteor.npmRequire('os').arch() === 'arm'){
      var GPIO = Meteor.npmRequire('onoff').Gpio;
      photometer = new GPIO(2, 'in');
    }else{
      console.log('OS does not have epoll so, LED cant change');
    }
  },

  //https://learn.adafruit.com/downloads/pdf/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing.pdf
  readTemp: function (){
    if (Meteor.npmRequire('os').arch() === 'arm'){
      var ds18b20 = Meteor.npmRequire('ds18b20');
      ds18b20.temperature('28-000003594599', Meteor.bindEnvironment(function(err, value) {
        if (err){
          console.log(err);
        }
          Meteor.wrapAsync(Meteor.call('writeTemptoDB',value));
      }));
    }else{
      console.log('OS does not have epoll so, cant change do hardware');
    }
  },

  writeTemptoDB: function(temperature){
    console.log('temperature is:', temperature);
    GardensLogList.insert( {
      dateTime: new Date(),
      celsius: temperature
    }, function (err) {
      console.log(err);
    });
  },

  writeTempuraturetoDB: function(temperature){
    console.log('temperature is:', temperature);
    TempuratureLogList.insert( {
      dateTime: new Date(),
      celsius: temperature
    }, function (err) {
      console.log(err);
    });
  },

  writeHumiditytoDB: function(temperature){
    console.log('temperature is:', temperature);
    HumidityLogList.insert( {
      dateTime: new Date(),
      percentHumidity: humidity
    }, function (err) {
      console.log(err);
    });
  },


  oneWireDevices: function (){
    if (Meteor.npmRequire('os').arch() === 'arm'){
      var ds18b20 = Meteor.npmRequire('ds18b20');
      ds18b20.sensors(Meteor.bindEnvironment(function(err, ids) {
        console.log(ids);
        return(ids);
      }));
    }else{
      console.log('OS does not have epoll so, LED cant change');
    }
  },

//DHT11 device pin 22 header 15 reads humidity and tempurature
readDHT11: function(){
  if (Meteor.npmRequire('os').arch() === 'arm'){
    var rpiDhtSensor = Meteor.npmRequire('rpi-dht-sensor');
    var dht = new rpiDhtSensor.DHT11(22);
    var readout = dht.read();
    console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' + 'humidity: ' + readout.humidity.toFixed(2) + '%');

  }else{
    console.log('OS does not have epoll so, LED cant change');
  }
},



});
