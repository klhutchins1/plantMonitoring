Router.route('/', function () {
  this.render('homeTemplate');
}, {
  name: 'home.show'
});

Router.route('/gettingStarted', function () {
  this.render('gettingStartedTemplate');
}, {
  name: 'gettingStarted.show'
});

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


//gardens routers
Router.route('/gardens/:gardenName', function () {
  this.render('gardenDetailsTemplate');
}, {
  name: 'gardenDetails.show',
  data: function(){
    var gardensLinkVar = this.params.gardenName;
    return  GardensList.findOne({gardenName: gardensLinkVar});
  }
});

Router.route('/gardens/:gardenName/edit', function () {
  this.render('editGardenDetailsTemplate');
}, {
  name: 'editGardenDetails.show',
  data: function(){
    var gardensLinkVar = this.params.gardenName;
    return  GardensList.findOne({gardenName: gardensLinkVar});
  }
});



//plants routers
Router.route('/plants/:plantName', function () {
  this.render('plantDetailsTemplate');
}, {
  name: 'plantDetails.show',
  data: function(){
    var plantsLinkVar = this.params.plantName;
    return  PlantsList.findOne({plantName: plantsLinkVar});
  }
});

Router.route('/plants/:plantName/edit', function () {
  this.render('editPlantDetailsTemplate');
}, {
  name: 'editPlantDetails.show',
  data: function(){
    var plantsLinkVar = this.params.plantName;
    return  PlantsList.findOne({plantName: plantsLinkVar});
  }
});




