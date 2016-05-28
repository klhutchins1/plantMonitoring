//look into flow router as iron may become depricated??
//iron router version.. moving to flow
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

Router.route('/settings/devices', function () {
  this.render('devicesTemplate');
}, {
  name: 'devices.show'
});

Router.route('/settings/devices/add', function () {
  this.render('addDeviceTemplate');
}, {
  name: 'addDevices.show'
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

Router.route('/temperature', function () {
  this.render('temperatureTemplate');
}, {
  name: 'temperature.show'
});


//gardens routers NOTE:Order Matters, Iron-route will match first

Router.route('/gardens/create', function () {
  this.render('createGardensTemplate');
}, {
  name: 'createGardensTemplate.show'
});

Router.route('/gardens/:gardenName', function () {
  this.render('gardenInfoTemplate');
}, {
  name: 'gardenInfoTemplate.show',
  data: function(){
    var gardensLinkVar = this.params.gardenName;
    return  GardensList.findOne({gardenName: gardensLinkVar});
  }
});

Router.route('/gardens/:gardenName/edit', function () {
  this.render('editGardenDetailTemplate');
}, {
  name: 'editGardenDetailTemplate.show',
  data: function(){
    var gardensLinkVar = this.params.gardenName;
    return  GardensList.findOne({gardenName: gardensLinkVar});
  }
});

Router.route('/gardens/:gardenName/detail', function () {
  this.render('gardenDetailTemplate');
}, {
  name: 'gardenDetailTemplate.show',
  data: function(){
    var gardensLinkVar = this.params.gardenName;
    return  GardensList.findOne({gardenName: gardensLinkVar});
  }
});






//plants routers

Router.route('/plants/create', function () {
  this.render('createPlantsTemplate');
}, {
  name: 'createPlantsTemplate.show'
});

Router.route('/plants/:plantName', function () {
  this.render('plantDetailsTemplate');
}, {
  name: 'plantDetailsTemplate.show',
  data: function(){
    var plantsLinkVar = this.params.plantName;
    return  PlantsList.findOne({plantName: plantsLinkVar});
  }
});

Router.route('/plants/:plantName/edit', function () {
  this.render('editPlantDetailsTemplate');
}, {
  name: 'editPlantDetailsTemplate.show',
  data: function(){
    var plantsLinkVar = this.params.plantName;
    return  PlantsList.findOne({plantName: plantsLinkVar});
  }
});





//plant Type Routes
Router.route('/plantType', function () {
  this.render('plantTypeTemplate');
}, {
  name: 'plantType.show',
  data: function(){
    var plantsTypeLinkVar = this.params.plantTypeName;
    return  PlantTypeList.findOne({plantTypeName: plantsTypeLinkVar});
  }
});



Router.route('gardens/:gardenName/temperature', function () {
  this.render('temperatureTemplate');
}, {
  name: 'temperatureTemplate.show'
});


Router.route('gardens/:gardenName/water', function () {
  this.render('waterTemplate');
}, {
  name: 'waterTemplate.show'
});
