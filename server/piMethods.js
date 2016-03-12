//adds GPIO for the raspi
Meteor.methods({
  OnLED: function (){
    if (Meteor.npmRequire('os').arch() === 'arm'){
        var GPIO = Meteor.npmRequire('onoff').Gpio;
        led = new GPIO(17, 'out');
        led.write(1);
        console.log('LED is now ON');
    }else{
      console.log('Windows does not have epoll so, LED cant change');
    }
  },
  OffLED: function (){
    console.log('LED should change')
    if (Meteor.npmRequire('os').arch() === 'arm'){
      var GPIO = Meteor.npmRequire('onoff').Gpio;
      led = new GPIO(17, 'out');
      led.write(0);
      console.log('LED is now OFF');
    }else{
      console.log('Windows does not have epoll so, LED cant change');
    }
  },

  readLight: function (){
    console.log('LED should change')
    if (Meteor.npmRequire('os').arch() === 'arm'){
      var GPIO = Meteor.npmRequire('onoff').Gpio;
      photometer = new GPIO(2, 'in');
    }else{
      console.log('Windows does not have epoll so, LED cant change');
    }
  },

  readTemp: function (){
    console.log('LED should change')
    if (Meteor.npmRequire('os').arch() === 'arm'){
      var GPIO = Meteor.npmRequire('onoff').Gpio;
      photometer = new GPIO(2, 'in');
    }else{
      console.log('Windows does not have epoll so, LED cant change');
    }
  },






});
