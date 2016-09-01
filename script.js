var colors = [
    'lightpink',
    'lightblue'
];

// Fade the background
d3.select('body').transition()
    .style('background-color', 'black');

// Update
var div = d3.select('body')
    .selectAll('div')
    .data([2, 3, 5, 7, 11, 15, 17, 19])
    .text(setText)
    .style('background-color', setBackground);

// Enter
div.enter().append('div')
    .text(setText)
    .style('background-color', setBackground);

// Exit
div.exit().remove();

// Helper methods

function setBackground(d, i) {
    var index = i % colors.length;
    return colors[index];
}

function setText(d) {
    return d;
}