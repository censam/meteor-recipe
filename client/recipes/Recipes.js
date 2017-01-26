Template.Recipes.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});
Template.Recipes.helpers({
	recipes: function () {
		return Recipes.find();
	}
});