Router.map(function(){
	this.route('homeRoute', {path: '/'} );
	this.route('gettingStartedRoute', {path: '/gettingStarted/'} );
	this.route('settingsRoute', {path: '/settings/'} );
});

PlantList = new Mongo.Collection("plants");
GardensList = new Mongo.Collection("gardens");
SettingsList = new Mongo.Collection("settings");



