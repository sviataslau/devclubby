UI.registerHelper("formatDate", function(datetime, format) {
  if (moment) {
    f = DateFormats[format];
    return moment(datetime).format(f);
  }
  else {
    return datetime;
  }
});

Meteor.autosubscribe(function() {
  Talks.find().observe({
    changed: function(item) {
      Helper.drawChart();
    },
    added: function(item) {
      Helper.drawChart();
    },
    removed: function(item) {
      Helper.drawChart();
    }
  })
})
