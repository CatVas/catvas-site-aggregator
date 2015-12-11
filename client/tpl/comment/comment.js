Template.Comment.helpers({
	author: function(){
		/*return Meteor.users.findOne({
			_id: this.author
		}, {
			fields: {
				username: 1
			}
		}).username;*/
		return this.author;
	}
});

Template.Comment.events({
	'click .l-comments-delete': function(ev, tpl){
		var conf = confirm('Really delete this comment?');

		if(conf){
			console.log('Comment ' + this._id + ' is deleted');
			Meteor.call('deleteComment', this._id, function(err, removed){
				if(err){
					console.log('[Client] Can not delete comment: _id "' + commentId + '"');
					throw err;
				}
			});
		}
	}
});