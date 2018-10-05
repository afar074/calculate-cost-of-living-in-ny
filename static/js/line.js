
var lineDiv = document.getElementById('line-chart');

var traceA = {
  x: [1, 5, 13, 24, 35, 46, 60],
  y: [80, 40, 70, 65, 15, 75, 49],
  type: 'scatter'
};

var traceB = {
  x: [4, 9, 17, 21, 31, 42, 56],
  y: [64, 81, 3, 49, 25, 17, 26],
  type: 'scatter'
};

var traceC = {
  x: [4, 9, 7, 21, 31, 50, 66],
  y: [64, 8, 30, 50, 25, 17, 26],
  type: 'scatter'
};

var data = [traceA, traceB, traceC];

var layout = {
  title:'A Line Chart in Plotly'
};

Plotly.plot( lineDiv, data, layout );