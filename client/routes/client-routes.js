Router.configure({
	layoutTemplate: 'AppLayout'
});

Router.route('/', function () {
	this.render('Welcome', {
		to: 'welcome'
	});
}, {
	name: 'Main'
});

Router.route('/sites', function () {
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