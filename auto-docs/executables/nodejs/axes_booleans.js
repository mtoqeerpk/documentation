var plotly = require('plotly')('TestBot', 'r1neazxo9w')

{}

var graph_options = {filename: "axes-booleans", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});