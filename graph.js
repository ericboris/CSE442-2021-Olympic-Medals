const DATA = [                                                                  
    { id: 'd1', value: 10, region: 'USA' },                                     
    { id: 'd3', value: 12, region: 'Germany' },                                 
    { id: 'd4', value: 6, region: 'China' },                                    
    { id: 'd5', value: 15, region: 'Russia' },                                  
];                                                                              
                                                                                
const container = d3                                                            
    .select('svg')                                                              
    .classed('container', true)                                                 

const xScale = d3                                                               
    .scaleBand()                                                                
    .domain(DATA.map(d => d.region))                                            
    .rangeRound([0, 250])                                                       
    .padding(0.1);                                                              
                                                                                
const yScale = d3                                                               
    .scaleLinear()                                                              
    .domain([0, 20])                                                            
    .range([200, 0]);                                                                                                                                          

const bars = container                                                          
    .selectAll('.bar')                                                          
    .data(DATA)                                                                 
    .enter()                                                                    
    .append('rect')                                                             
    .classed('bar', true)                                                       
    .attr('width', xScale.bandwidth())                                          
    .attr('height', d => 200 - yScale(d.value))                                 
    .attr('x', d => xScale(d.region))                                           
    .attr('y', d => yScale(d.value));                                           
                                                                                

