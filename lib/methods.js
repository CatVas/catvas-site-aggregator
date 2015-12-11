Meteor.methods({
	deleteComment: function(commentId){
		check(commentId, String);

		if(!commentId){
			console.log('[Server] Can not delete comment: _id "' + commentId + '"');
			return false;
		}

		Comments.remove({_id: commentId}, function(err, removed){
			if(err){
				console.log('[Server] Could not delete comment: _id "' + commentId + '"');
				throw err;
			}

			console.log('[Server] Removed ' + removed + ' comments: _id "' + commentId + '"');
		});
	},

	insertComment: function(options){
		check(options, {
			author: String,
			site: String,
			added: Date,
			title: String,
			text: String,
		});

		if(Meteor.userId() !== options.author){
			return false;
		}

		Comments.insert(options, function(err, _id){
			if(err){
				console.log('[Server] Bad comment insertion');
				throw err;
			}
		});
	},

	insertSite: function(options){
		check(options, {
			url: String,
			title: String,
			description: String,
			postedBy: String
		});

		var isPresent = Websites.find({url: options.url});

		options = _.extend(options, {
			createdOn: new Date(),
			votesUp: 0,
			votesUpBy: [],
			votesDown: 0,
			votesDownBy: []
		});

		if(isPresent.count() === 0){
			if(Meteor.isClient){
				Session.set('siteExists', false);
			}
			
			Websites.insert(options, function(err, _id){
				if(err){
					throw err;
				}
			});
		}
		else{
			if(Meteor.isClient){
				Session.set('siteExists', isPresent.fetch()[0]._id);
				console.log('There is already a site with such URL.' + Session.get('siteExists') );
			}
		}
	},

	voteSite: function(vote, siteId, userId){
		check(vote, Number);
		check(siteId, String);
		check(userId, String);

		var vote = (vote >= 0) ? 1 : -1;
		var siteDoc = Websites.findOne({
			_id: siteId
		}, {
			fields: {
				votesUp: 1,
				votesUpBy: 1,
				votesDown: 1,
				votesDownBy: 1
			}
		});
		var userIdInUpBy = _.indexOf(siteDoc.votesUpBy, userId); // index of "userId" in "votesUpBy" array
		var userIdInDownBy = _.indexOf(siteDoc.votesDownBy, userId); // index of "userId" in "votesDownBy" array

		// console.log(vote + ' by ' + userId + ' for ' + siteId);
		// console.log('Site doc before:');
		// console.dir(siteDoc);

		if(vote > 0 && userIdInUpBy < 0){
			if(userIdInDownBy >= 0){
				siteDoc.votesDown++;
				siteDoc.votesDownBy.splice(userIdInDownBy, 1);
			}
			else{
				siteDoc.votesUp++;
				siteDoc.votesUpBy.push(userId);
			}
		}

		if(vote < 0 && userIdInDownBy < 0){
			if(userIdInUpBy >= 0){
				siteDoc.votesUp--;
				siteDoc.votesUpBy.splice(userIdInUpBy, 1);
			}
			else{
				siteDoc.votesDown--;
				siteDoc.votesDownBy.push(userId);
			}
		}
		// console.log('Site doc after:');
		// console.dir(siteDoc);
		
		Websites.update({
			_id: siteId
		}, {
			$set: {
				votesUp: siteDoc.votesUp,
				votesUpBy: siteDoc.votesUpBy,
				votesDown: siteDoc.votesDown,
				votesDownBy: siteDoc.votesDownBy
			}
		}, function(err, upd){
			if(err){
				throw err;
			}

			console.log('Successfully updated: ' + upd + ' docs.');
		});
	}
});