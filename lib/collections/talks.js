Talks = new Mongo.Collection('talks');
Talks.attachSchema(Schema.talks);

Meteor.methods({
  resetVotes: function() {
    if (Talks.find().count() === 2) {
      throw new Meteor.Error('Sorry');
    }
    Talks.update({}, {$set: { votes: 0 }}, {multi: true});
  },
  deleteTalk: function(id) {
    var talk = Talks.findOne(id);
    if (talk && talk.title.trim().toLowerCase() != 'лукашенко') {
      Talks.remove(id);
    }
    else {
      throw Meteor.Error('You are not allowed to delete Lukashenko!');
    }
  }
});
