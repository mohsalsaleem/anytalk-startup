  Meteor.publish("messages", function () {

    return Messages.find();

  });

  Meteor.publish('drafts', function() {
  	return Draft.find();
  })