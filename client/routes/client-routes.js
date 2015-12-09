Router.configure({
	layoutTemplate: 'AppLayout'
});

Router.route('/', function () {
	this.render('Welcome', {
		to: 'welcome'
		//data: function () { return Items.findOne({_id: this.params._id}); }
	});
}, {
	name: 'Main'
});

Router.route('/sites', function () {
	this.render('Welcome', {
		to: 'welcome'
		//data: function () { return Items.findOne({_id: this.params._id}); }
	});
}, {
	name: 'Sites'
});