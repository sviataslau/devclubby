DateFormats = {
       short: "DD MMMM YYYY",
       long: "dddd DD.MM.YYYY HH:mm"
};

Helper = {};
Helper.drawChart = function() {
  var talks = Talks.find().fetch();
  var categories = _.pluck(talks, 'title');
  var votes = _.pluck(talks, 'votes');
  $('#chart').highcharts({
    chart: {
      type: 'bar'
    },
    title: {
      text: '#devclubby'
    },
    subtitle: {
      text: 'Популярность докладов 2014г.'
    },
    xAxis: {
      categories: categories,
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      allowDecimals: false,
      title: {
        text: 'Количество голосов',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    legend: { enabled: false },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      data: votes
    }]
  });
};
