Template.website_item.helpers({
	siteExists: function(){
		var _id = this._id;

		return Session.equals('siteExists', _id);
	},

	votesDown: function(){
		return +this.votesDown * -1;
	},
	votesUp: function(){
		return this.votesUp;
	}
});

Template.website_item.events({});