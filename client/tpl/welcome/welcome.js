Template.Welcome.helpers({
	greetings: function(){
		if( Meteor.user() ){
			var userName = Meteor.user().username;

			return userName + ', welcome to Site aggregator!';
		}
		else{
			return 'Welcome to Site aggregator, sir!';
		}
	}
});