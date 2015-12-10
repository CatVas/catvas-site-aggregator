Meteor.methods({
	insertSite: function(options){
		check(options, {
			url: String,
			title: String,
			description: String,
			postedBy: String
		});

		options = _.extend(options, {
			createdOn: new Date(),
			votesUp: 0,
			votesUpBy: [],
			votesDown: 0,
			votesDownBy: []
		});

		Websites.insert(options, function(err, _id){
			if(err){
				throw err;
			}
		});
	},

	voteSite: function(vote, siteId, userId){
		check(vote, Number);
		check(siteId, String);
		check(userId, String);

		var vote = (vote >= 0) ? 1 : -1;

		console.log(vote + ' by ' + userId + ' for ' + siteId);
		/*
		--- Algorithm: ---
		Get the doc: {_id: siteId}.

		if(userId is not in votesUpBy && vote > 0){
			votesUpBy.addToSet(userId);
			++votesUp;

			if(userId is in votesDownBy){}
		}
		*/
		//Websites.update();
	}
});