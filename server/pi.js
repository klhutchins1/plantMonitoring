//var epoll1 = Meteor.npmRequire('epoll');
//var onoff1 = Meteor.npmRequire('onoff');
//var sp = Meteor.npmRequire('serialport');
//var wpi = require('os').arch() === 'arm' ? require('wiring-pi') : {};
//console.log(wpi);

//add to packages.json
//"wiring-pi": "2.0.0"

//console.log(Meteor.npmRequire('os').arch() );

//if (Meteor.npmRequire('os').arch() === 'arm'){
//  wpi = require('wiring-pi');
//  console.log(wpi);
//}else {
//  wpi= '';
//}

//adds GPIO for the raspi
var gpio = Meteor.npmRequire('rpi-gpio');

//Wont build unless system is running ARM CPU for rasPi
if (Meteor.npmRequire('os').arch() === 'arm'){
  gpio.setup(7, gpio.DIR_IN, readInput);

  //reads from PIN  https://www.npmjs.com/package/rpi-gpio
  function readInput() {
      gpio.read(7, function(err, value) {
          console.log('The value is ' + value);
          console.log('This will only show up when Running on ARM');
      });
  },
}
