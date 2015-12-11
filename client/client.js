Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

/*--- Subscriptions ---*/
subsComments = Meteor.subscribe('Comments');
subsWebsites = Meteor.subscribe('Websites');

/*--- Sessions ---*/
Tracker.autorun(function(){
	if( !Meteor.userId() ){
		Session.set('siteExists', false);
	}
});