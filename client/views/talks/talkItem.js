Template.talkItem.events({
  'click .upvote': function (e) {
    Talks.update(this._id, {$inc: { votes: 1 }});
  },
  'click .downvote': function (e) {
    Talks.update(this._id, {$inc: { votes: -1 }});
  },
  'click .delete': function (e) {
    Meteor.call('deleteTalk', this._id);
  }
});
