Meteor.subscribe('messages');

Template.chat.rendered = () =>{
	console.log("Saleem");
	let objDiv = document.getElementById("message-board");
	objDiv.scrollTop = objDiv.scrollHeight;
}

Template.chat.helpers({
	messages: function() {
		return Messages.find().fetch();
	},

	selectedMessage: () => {

	}

});

Template.chat.events({
	'click [data-id=send-message]': function (e,t)
	{
		let message = t.find('[data-id=message]').value,
			username = Meteor.user().emails[0].address.split("@")[0]
			createdAt = new Date().getHours().toString() + ":" + new Date().getMinutes().toString();
		console.log(createdAt);

		if(message !== ""){
			Messages.insert({
				message: message,
				username: username,
				createdTime: createdAt,
				createdAt: new Date()
			});
			let objDiv = document.getElementById("message-board");
			objDiv.scrollTop = objDiv.scrollHeight;
			t.find('[data-id=message]').value = " ";


		}
	},

	'click .add': function() {
		//let mesasgeId = t.find(".add");
		// 
		let message = this.message,
			saidBy = this.username,
			addedBy = Meteor.user().emails[0].address.split("@")[0];
			
		
		Draft.insert({
			message: message,
			saidBy: saidBy,
			addedBy: addedBy,
			addedAt: new Date()
		})


	}


});