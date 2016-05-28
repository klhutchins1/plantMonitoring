Template.addDeviceTemplate.rendered = function() {
    this.$('.collapsible').collapsible();
		this.$('select').material_select();
};

Template.addDeviceTemplate.helpers({
  protocolSelect: function(){
    protocol ["1Wire", "I2C"]
  }
});
