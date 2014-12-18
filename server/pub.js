if (Talks.find().count() === 0) {
	Talks.insert({
		title: 'Meteor',
		date: new Date(),
		votes: 0,
		description: 'intro to meteorjs'
	});

}

Meteor.publish('talks', function() {
	return Talks.find();
});
