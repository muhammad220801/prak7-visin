google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(getSpreadsheetData);

function getSpreadsheetData() {
  var spreadsheetId = '1xcc0UOt4DJeeX9lG7eYZ3RWW40Y_WptQcdxadEKRzwQ';
  var range1 = 'Sales!A1:C13';
  var range2 = 'CrossTab!A1:B3';
  var range3 = 'CitySales!A1:B5';

  var query1 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range1);
  query1.send(function(response1) {
    handleQueryResponse(response1, 'chart1', drawChart1);
  });

  var query2 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range2);
  query2.send(function(response2) {
    handleQueryResponse(response2, 'chart2', drawChart2);
  });
  
  var query3 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range3);
  query3.send(function(response3) {
    handleQueryResponse(response3, 'chart3', drawChart3);
  });
}

function handleQueryResponse(response, chartId, drawFunction) {
  if (response.isError()) {
    console.error('Error in query: ' + response.getMessage());
    return;
  }

  var data = response.getDataTable();
  drawFunction(data, chartId);
}

function drawChart1(data, chartId) {
  var options = {
    title: 'Perbandingan penjualan 2022 dengan 2023',
    width: 400,
    height: 300
  };

  var chart = new google.visualization.ColumnChart(document.getElementById(chartId));
  chart.draw(data, options);
}

function drawChart2(data, chartId) {
  var options = {
    title: 'presentase penjualan setiap region',
    width: 400,
    height: 300
  };

  var chart = new google.visualization.PieChart(document.getElementById(chartId));
  chart.draw(data, options);
}

function drawChart3(data, chartId) {
  var options = {
    title: 'presentase penjualan setiap region',
    width: 400,
    height: 300
  };

  var chart = new google.visualization.BarChart(document.getElementById(chartId));
  chart.draw(data, options);
}
