Router.configure({
	layoutTemplate: 'AppLayout'
});

Router.route('/', function () {
	Session.set('siteExists', false);
	Session.set('searchSitePattern', null);

	this.layout('layoutWelcome');

	this.render('Welcome', {
		to: 'welcome'
	});
}, {
	name: 'Main'
});

Router.route('/sites', function () {
	Session.set('siteExists', false);
	Session.set('searchSitePattern', null);

	this.layout('layoutSites');

	this.render('Welcome', {
		to: 'welcome'
	});

	this.render('website_form', {
		to: 'website_form'
	});

	this.render('search_form', {
		to: 'search_form'
	});

	this.render('website_list', {
		to: 'website_list'
	});
}, {
	name: 'Sites'
});

Router.route('/sites/:_id', function () {
	Session.set('siteExists', false);

	this.layout('layoutSite', {
		data: function(){
			return Websites.findOne({_id: this.params._id});
		}
	});

	this.render('Welcome', {
		to: 'welcome'
	});

	this.render('website_info', {
		to: 'website_info'
	});
}, {
	name: 'Site'
});