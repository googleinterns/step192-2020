const script = document.createElement('script');
script.src = 'https://www.gstatic.com/charts/loader.js';
script.defer = true;

window.initMap = function() {
  google.charts.load('current', {'packages': ['calendar', 'timeline']});
  google.charts.setOnLoadCallback(drawCharts);

  /**
   * Callback function to generate charts.
   */
  function drawCharts() {
    const freqData = new google.visualization.DataTable();
    const timelineData = new google.visualization.DataTable();
    fetch('/suggested-cal').
        then((response) => response.json()).
        then((myObject) => {
        // TODO(ihsan314): update freqData datatable
        // and update timelineData datatable
        });
    drawFrequencyChart(freqData);
    drawTimelineChart(timelineData);
  }

  /**
   * Generate frequency calendar chart of deadlines.
   * @param {google.visualization.DataTable} freqData
   * the DataTable corresponding to the frequency of deadlines
   */
  function drawFrequencyChart(freqData) {
    const options = {
      'title': 'Expected Application Heat Map',
    };
    const chart = new google.visualization.Calendar(
        document.getElementById('calendar-freq-map'));
    chart.draw(freqData, options);
  }

  /**
   * Generate suggested timeline of actions related to deadlines.
   * @param {google.visualization.DataTable} timelineData
   * the DataTable corresponding to the
   * suggested actions to take before the deadlines
   */
  function drawTimelineChart(timelineData) {
    const options = {
      'title': 'Suggested Application Timeline',
    };
    const chart = new google.visualization.Timeline(
        document.getElementById('timeline-chart'));
    chart.draw(timelineData, options);
  }
};

document.head.appendChild(script);