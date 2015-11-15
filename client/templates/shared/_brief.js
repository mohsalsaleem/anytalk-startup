Meteor.subscribe('drafts');

Template.brief.helpers({
	drafts: function() {
		return Draft.find().fetch();
	}
});


Template.brief.events({
	'click .btn-danger': function() {
		let answer = confirm("You sure you want to delete?");
		if(answer){
			Draft.remove({_id:this._id});
		}
	}
})