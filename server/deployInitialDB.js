Meteor.startup(function () {
    if (SettingsList.find().count() === 0) {
      var initSettings = [{
          name: "Collect Data",
          inputType: "checkbox",
          isChecked: true,
        },
        {
          name: "Automated Garden",
          inputType: "checkbox",
          isChecked: true

        },
        {
          name: "Monitor Air Temperature",
          inputType: "checkbox",
          isChecked: true

        },
        {
          name: "Monitor Soil Temperature",
          inputType: "checkbox",
          isChecked: false

        },
        {
          name: "Monitor Soil Moisture",
          inputType: "checkbox",
          isChecked: true

        },
        {
          name: "Monitor Light Lumens",
          inputType: "checkbox",
          isChecked: true

        },
        {
          name: "Monitor Humidity",
          inputType: "checkbox",
          isChecked: false

        },
        {
          name: "Monitor Wind",
          inputType: "checkbox",
          isChecked: true

        },
        {
          name: "Temperature Units",
          inputType: "tempSelect",
          unitsForTemp: "Fahrenheit"


        },
        {
          name: "Time Zone",
          inputType: "tzSelect",
          timeZ:  "Mountain"

        },
        {
          name: "Latitude",
          inputType: "form",
          lat: ""

        },
        {
          name: "Longitude",
          inputType: "form",
          log: ""
        }
      ];

      //bulk add is not available yet in Meteor
      _.each(initSettings, function(doc) {
        SettingsList.insert(doc);
      });
    }
});
