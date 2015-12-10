Meteor.publish('Websites', function(){
	return Websites.find({});
});