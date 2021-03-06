
//PlantsList
Meteor.publish('plants', function() {
    return PlantsList.find();
});

//GardensList
Meteor.publish('gardens', function() {
    return GardensList.find();
});

//SettingsList
Meteor.publish('settings', function() {
    return SettingsList.find();
});

//TaxonomyList
Meteor.publish('taxonomy', function() {
    return TaxonomyList.find();
});

//DevicesList
Meteor.publish('devices', function() {
    return DevicesList.find();
});

//PlantsLogList
Meteor.publish('plantLogs', function() {
    return PlantsLogList.find();
});

//GardensLogList
Meteor.publish('gardenLogs', function() {
    return GardensLogList.find();
});
Meteor.publish('latestTemps', function() {
  return GardensLogList.find({}, {sort: {dateTime: -1}, limit: 1});
});
Meteor.publish('showTemp', function() {
    return GardensLogList.find({}, {sort: {dateTime: -1}, limit: 12});
});
