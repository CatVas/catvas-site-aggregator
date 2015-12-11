Template.Comments.helpers({
	comments: function(){
		return Comments.find({site: this._id});
	}
});