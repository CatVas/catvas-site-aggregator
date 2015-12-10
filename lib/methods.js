Meteor.methods({
	insertSite: function(options){
		check(options, {
			url: String,
			title: String,
			description: String,
			postedBy: String
		});

		// console.log(options);
		// continue with _.extend
	}
});