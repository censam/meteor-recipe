Template.Shoppinglist.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});
Template.Shoppinglist.helpers({
	shoppingList: function () {
		return Recipes.find({inMenu:true});
	}
});