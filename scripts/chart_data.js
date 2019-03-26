var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: {
    labels: ['Work', 'Hobby', 'School', 'Personal'],
    datasets: [{
        label: 'Cloud Storage Usage',
        backgroundColor: ['#E75A46', '#CAE5FF', '#FFDB72', '#B5EDDD'],
        borderColor: 'inherit',
        data: [10, 5, 5, 19],
        borderWidth: 0,
      }]
    },

    // Configuration options go here
    options: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: 16,
          fontStyle: 'letter-spacing: 0.05em',
        }
      }
    }
  });

var cty = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(cty, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
    labels: ['Time', 'Scheduling', 'Communication'],
    datasets: [{
        label: 'Common Frustrations',
        backgroundColor: ['#E75A46', '#CAE5FF', '#FFDB72'],
        borderColor: 'inherit',
        data: [3, 3, 2, 0, 3.5],
        borderWidth: 0,
      }]
    },

    // Configuration options go here
    options: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: 16,
          fontStyle: 'letter-spacing: 0.05em',
        }
      }
    }
  });
