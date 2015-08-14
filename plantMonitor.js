UI.registerHelper('formatTime', function(context, options) {
  if(context)
    return moment(context).format('MM/DD/YYYY, hh:mm a');
});



Meteor.methods({
  //Toggles and save checkbox values to DB
  toggleChecked: function (settingId, setChecked) {
    if (setChecked == true || setChecked == false) {
      SettingsList.update(settingId, { $set: { isChecked: setChecked } } );
    } else {
      console.log("setChecked is not valid. Needs to be true or false")
    }
  }

});
