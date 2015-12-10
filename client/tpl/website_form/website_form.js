Template.website_form.events({
	"click .js-toggle-website-form": function(event){
		$("#website_form").toggle('slow');
	},

	"submit .js-save-website-form": function(event){
		var userId = Meteor.userId();
		var url = event.target.url.value;
		var title = event.target.title.value;
		var description = event.target.description.value;

		if(!userId){
			throw 'Please, log in to add a site';
			return false;
		}
		if(!url){
			//throw 'URL length can not be equal to zero.';
			alert('URL length can not be equal to zero.');
			return false;
		}

		var options = {
			url: url,
			title: title || 'Untitled site',
			description: description || 'This site is without description.',
			postedBy: userId
		};

		//console.dir(options);
		Meteor.call('insertSite', options, function(err, res){
			if(err){
				throw err;
			}
		});

		return false;
	}
});