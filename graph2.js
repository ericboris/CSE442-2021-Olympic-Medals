const DATA = [
    { id: 'd1', country: 'Nepal', value: 10 },
    { id: 'd2', country: 'Thailand', value: 14 },
    { id: 'd3', country: 'Vietnam', value: 16 },
    { id: 'd4', country: 'India', value: 9 },
];

// Chart dimensions.
// Use margins to keep axes within frame.
const MARGINS = {top: 20, bottom: 10};
const CHART_WIDTH = 600;
const CHART_HEIGHT = 400 - MARGINS.top - MARGINS.bottom;

const chartContainer = d3
    .select('svg')
    .attr('width', CHART_WIDTH)
    .attr('height', CHART_HEIGHT + MARGINS.top + MARGINS.bottom);

// Minimum space between top of tallest bar and top of graph.
const HEADSPACE = 2;

// Horizontal padding between bars.
const BAR_PADDING = 0.1;

// Define bar width.
const x = d3
    .scaleBand()
    .rangeRound([0, CHART_WIDTH])
    .padding(BAR_PADDING)
    .domain(DATA.map((d) => d.country));

// Define bar height.
const y = d3
    .scaleLinear()
    .range([CHART_HEIGHT, 0])
    .domain([0, d3.max(DATA, (d) => d.value) + HEADSPACE]);

const chart = chartContainer.append('g');

// Create chart axes.
chart
    .append('g')
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .attr('transform', `translate(0, ${CHART_HEIGHT})`)
    .attr('color', '#4f0093');

// Bar value label offsets.
const VALUE_LABEL_HORIZ_OFFSET = x.bandwidth() / 2;
const VALUE_LABEL_VERT_OFFSET = -20;

// Render only selected data.
let selectedData = DATA;

function renderChart() {
    // Show selected chart bars.
    chart
        .selectAll('.bar')
        .data(selectedData, d => d.id)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', x.bandwidth())
        .attr('height', (d) => CHART_HEIGHT - y(d.value))
        .attr('x', (d) => x(d.country))
        .attr('y', (d) => y(d.value));

    // Show selected bar value labels.
    chart
        .selectAll('.label')
        .data(selectedData, d => d.id)
        .enter()
        .append('text')
        .text((d) => d.value)
        .attr('x',(d)=> x(d.country) + VALUE_LABEL_HORIZ_OFFSET)
        .attr('y',(d)=> y(d.value) + VALUE_LABEL_VERT_OFFSET)
        .attr('text-anchor', 'middle')
        .classed('label', true);

    // Remove unselected chart bars.
    chart
        .selectAll('.bar')
        .data(selectedData, d => d.id)
        .exit()
        .remove();

    // Remove unselected chart labels.
    chart
        .selectAll('.label')
        .data(selectedData, d => d.id)
        .exit()
        .remove();
}

// Prevent blank chart on page-load.
renderChart();

// Create empty list.
const listItems = d3
    .select('#data')
    .select('ul')
    .selectAll('li')
    .data(DATA)
    .enter()
    .append('li');

listItems
    .append('span')
    .text((d)=> d.country);

// Create checklist.
let unselectedIds = [];

listItems
    .append('input')
    .attr('type', 'checkbox')
    .attr('checked', true)
    .on('change', (d1) => {
        if (unselectedIds.indexOf(d1.id) === -1) {
            unselectedIds.push(d1.id);
        } else {
            unselectedIds = unselectedIds.filter((id) => id !== d1.id);
        }
        // Update selected data based on current selection.
        selectedData = DATA.filter((d2) => unselectedIds.indexOf(d2.id) === -1);
        renderChart();
    });
