SyncedCron.add({
  name: 'Get the Temperature on a schedule',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 15 minutes');
  },
  job: function() {
    var getTemperatureSchedule = Meteor.call('readTemp');
    return getTemperatureSchedule;
  }
});


//SyncedCron.start();
//reenable this once hardware is setup
