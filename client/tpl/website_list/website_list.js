Template.website_list.helpers({
	websites: function(){
		var selector = Session.get('searchSitePattern') ? {
			title: {
				$regex: Session.get('searchSitePattern'),
				$options: 'i'
			}
		} : {};
		var clause = {
			sort: {votesUp: -1}
		};

		return Websites.find(selector, clause);
	}
});