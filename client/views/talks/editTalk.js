Template.editTalk.events({
  'click .btn-delete': function (e) {
    Meteor.call('deleteTalk', this._id);
    Router.go('/');
  }
});
