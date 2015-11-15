Meteor.subscribe('drafts');

Template.brief.helpers({
	drafts: function() {
		return Draft.find().fetch();
	}
});
