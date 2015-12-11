Meteor.publish('Comments', function(){
	/*if(!userId){
		console.log('Bad userId to subscribe: ' + userId);
		throw 'Please pass the correct userId to subscribe to "Comments"';
	}*/

	return Comments.find();
});

Meteor.publish('Websites', function(){
	return Websites.find({});
});