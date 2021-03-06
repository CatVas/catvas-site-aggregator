Template.website_info.helpers({
	votesDown: function(){
		return +this.votesDown * -1;
	},
	votesUp: function(){
		return this.votesUp;
	}
});

Template.website_info.events({
	'click .js-upvote': function(event){
		var siteId = this._id;
		var userId = Meteor.userId();

		if(!userId){
			alert('Please log in to vote the sites');
			return false;
		}

		Meteor.call('voteSite', 1, siteId, userId, function(err, res){
			if(err){
				throw err;
			}
		});

		return false;
	},

	'click .js-downvote': function(event){
		var siteId = this._id;
		var userId = Meteor.userId();

		if(!userId){
			alert('Please log in to vote the sites');
			return false;
		}

		Meteor.call('voteSite', -1, siteId, userId, function(err, res){
			if(err){
				throw err;
			}
		});

		return false;
	}
});