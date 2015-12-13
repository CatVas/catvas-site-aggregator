Template.comment_form.events({
	'submit .f-comments': function(ev, tpl){
		var userId = Meteor.userId();
		var options = {
			author: userId,
			authorName: Meteor.users.findOne({_id: userId}, {fields: {username: 1}}).username,
			site: this._id,
			added: new Date(),
			title: ev.target.comment_title.value || 'Untitled comment',
			text: ev.target.comment_text.value || 'Without comments...',
		};
		//console.dir(options);

		Meteor.call('insertComment', options, function(err, res){
			if(err){
				console.log('[Client] Bad comment insertion');
				throw err;
			}

			ev.target.comment_title.value = '';
			ev.target.comment_text.value = '';
		});

		return false;
	}
});

Template.comment_form.helpers({});