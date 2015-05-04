Router.route('/', function () {
  this.render('homeTemplate');
}, {
  name: 'home.show'
});

Router.route('/gettingStarted', function () {
  this.render('gettingStartedTemplate');
}, {
  name: 'gettingStarted.show'}
);

Router.route('/settings', function () {
  this.render('settingsTemplate');
}, {
  name: 'settings.show'
});

Router.route('/gardens', function () {
  this.render('gardensTemplate');
}, {
  name: 'gardens.show'
});

Router.route('/plants', function () {
  this.render('plantsTemplate');
}, {
  name: 'plants.show'
});

Router.route('/gardens/:gardenName', function () {
  this.render('gardenDetailsTemplate');
}, {
  name: 'gardenDetails.show',
  data: function(){
    var gardensLinkVar = this.params.gardenName;
    //console.log(gardensLinkVar);
    return  GardensList.findOne({gardenName: gardensLinkVar});
  }
});


Router.route('/plants/:plantName', function () {
  this.render('plantDetailsTemplate');
}, {
  name: 'plantDetails.show',
  data: function(){
    var plantsLinkVar = this.params.plantName;
    //console.log(plantsLinkVar);
    return  PlantsList.findOne({plantName: plantsLinkVar});
  }
});

Router.route('/plants/:plantName/edit', function () {
  this.render('editPlantDetailsTemplate');
}, {
  name: 'editplantDetails.show',
  data: function(){
    var plantsLinkVar = this.params.plantName;
    //console.log(plantsLinkVar);
    return  PlantsList.findOne({plantName: plantsLinkVar});
  }
});

PlantsList = new Mongo.Collection("plants");
GardensList = new Mongo.Collection("gardens");
SettingsList = new Mongo.Collection("settings");



