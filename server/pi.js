//adds GPIO for the raspi
Meteor.methods({
  toggleLED: function (){
    var GPIO = Meteor.npmRequire('onoff').Gpio,
      led = new GPIO(17, 'out'),
      led.writeSync(led.readSync() ^ 1); // 1 = on, 0 = off :)
  }


});


//Wont build unless system is running ARM CPU for rasPi
if (Meteor.npmRequire('os').arch() === 'arm'){
  console.log('This will only show up when Running on ARM');
  var GPIO = Meteor.npmRequire('onoff').Gpio,
    led = new GPIO(17, 'out'),
    iv;



    // Toggle the state of the LED on GPIO #14 every 200ms.
    // Here synchronous methods are used. Asynchronous methods are also available.
    iv = setInterval(function () {
      led.writeSync(led.readSync() ^ 1); // 1 = on, 0 = off :)
    }, 200);

    // Stop blinking the LED and turn it off after 5 seconds.
    setTimeout(function () {
      clearInterval(iv); // Stop blinking
      led.writeSync(0);  // Turn LED off.
      led.unexport();    // Unexport GPIO and free resources
    }, 5000);
    //button = new GPIO(18, 'in', 'both'),
    //thermometer = new GPIO(7,'in');


  //function light(err, state) {
  //  if(state==1){
//      led.writeSync(1);
//      console.log('LED should change')
//    } else{
//      led.writeSync(0);
//      console.log('LED should change')
//    }
//  }

//button.watch(light);



}else{
  console.log('This will only show up when Running on WINDOWS or Non-ARM');
}
