var colors = [
    'lightpink',
    'lightblue'
];

var data = [];

var url = 'http://127.0.0.1:5984/z5e4a2358-1120-4fdb-b37a-ff65ecc57f37/_all_docs?include_docs=true';

// Request data
var request = new XMLHttpRequest()
request.responseType = 'json';
request.addEventListener('load', loadData);
request.open('GET', url);
request.send();

// Load data from a request into the UI
function loadData(event) {
    data = parseData(event.target.response);
    render();
}

// Parse data
function parseData(response) {
    return response.rows.map(function(r) {
        return r.doc;
    });
}

// Render data
function render() {
    // Update
    var div = d3.select('body')
        .selectAll('div')
        .data(data)
        .text(setText)
        .style('background-color', setBackground);

    // Enter
    div.enter().append('div')
        .text(setText)
        .style('background-color', setBackground);

    // Exit
    div.exit().remove();
}

// Helper methods

function setBackground(d, i) {
    var index = i % colors.length;
    return colors[index];
}

function setText(d) {
    return `${Math.round(d.distance / 1609.344 * 10.0) / 10.0} mi`;
}