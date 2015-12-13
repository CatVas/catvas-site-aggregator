Template.search_form.events({
	'keyup .form-control': function(ev, tpl){
		Session.set('searchSitePattern', ev.target.value);
	}
});

Template.search_form.helpers({});