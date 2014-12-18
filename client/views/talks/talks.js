Template.talks.helpers({
	talks: function() {
		return Talks.find({}, {sort: {date: -1}});
	}
});

Template.talksChart.rendered = Helper.drawChart;
