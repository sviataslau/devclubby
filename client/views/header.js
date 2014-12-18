Template.header.events({
  'click .resetVotes': function(e) {
    if (confirm('А ю рыали шуа?')) {
      Meteor.call('resetVotes');
    }
  }
});
