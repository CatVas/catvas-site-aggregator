Template.website_list.helpers({
	websites: function(){
		var selector = {};

		return Websites.find(selector, {
			sort: {votesUp: -1}
		});
	}
});