//adds GPIO for the raspi

//Wont build unless system is running ARM CPU for rasPi
if (Meteor.npmRequire('os').arch() === 'arm'){
  console.log('This will only show up when Running on ARM');
  var GPIO = Meteor.npmRequire('onoff').Gpio,
    led = new GPIO(18, 'out'),
    button = new GPIO(17, 'in', 'both'),
    thermometer = new GPIO(7,'in');


  function light(err, state) {
    if(state==1){
      led.writeSync(1);
    } else{
      led.writeSync(0);
    }
  }

button.watch(light);



}else{
  console.log('This will only show up when Running on WINDOWS');
}
