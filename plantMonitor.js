Router.map(function(){
	this.route('homeRoute', {path: '/'} );
	this.route('gettingStartedRoute', {path: '/gettingStarted/'} );
	this.route('settingsRoute', {path: '/settings/'} );
	this.route('gardensRoute', {path: '/gardens/'} );
	this.route('plantsRoute', {path: '/plants/'} );
});

PlantsList = new Mongo.Collection("plants");
GardensList = new Mongo.Collection("gardens");
SettingsList = new Mongo.Collection("settings");



