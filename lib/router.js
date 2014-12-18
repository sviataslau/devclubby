Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('talks', Meteor.userId); }
});
Router.plugin('dataNotFound', { dataNotFoundTemplate: 'notFound' });

Router.route('/', function() {
	this.render('talks');
});

Router.route('/editTalk/:_id', function() {
	this.render('editTalk');
}, {
	name: 'talk',
	data: function() { return Talks.findOne(this.params._id); }
});

Router.route('/addTalk');
