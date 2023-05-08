// Set the dimensions and margins of the pie chart full screen
const width = 1150;
const height = 550;
const margin = 40;



// Set the radius of the pie chart at 1/2 the width or height
const radius = Math.min(width, height) / 2 - margin;

// Select the div element that will contain the chart at left side
const svg = d3.select("#piechart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Set the data for the chart
const data = [7850, 8632, 17762, 18901, 19690, 20508, 20509, 23693, 24976, 25400];

// Set the color scale for the chart
const color = d3.scaleOrdinal()
  .domain(data)
  .range(["#0284C7", "#ff7f00", "#8B5CF6", "#FB7185", "#DC2626", "#EAB308", "#10B981", "#475569", "#404040", "#92400E"]);

// Set the arc function for the chart
const arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);

// sum data to 100% and show percentage
const sum = data.reduce((a, b) => a + b, 0);
const dataPercentage = data.map((d) => (d / sum) * 100);

// set sum data name to the legend
const dataName = ["Macao", "Falkland Islands", "Montserrat", "Antigua and Barbuda", "Cook Islands", "Wallis and Futuna", "Nauru", "Eritrea", "Vanuatu", "Saint Pierre Miquelon"];


// Set the pie function for the chart
const pie = d3.pie()
  .value(function(d) { return d; })
  .sort(null);

// Generate the arcs for the chart
const arcs = pie(data);

// Add the arcs to the chart
svg.selectAll("path")
  .data(arcs)
  .enter()
  .append("path")
  .attr("d", arc)
  .attr("fill", function(d) { return color(d.data); })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.9);
  
// show sum data to 100% and show percentage
svg.selectAll("text")
  .data(arcs)
  .enter()
  .append("text")
  .text(function(d, i) { return dataPercentage[i].toFixed(1) + "%"; })
  .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
  .style("text-anchor", "middle")
  .style("font-size", 12)
  .style("fill", "white");

// make legend at the right side of the pie chart
const legend = svg.selectAll(".legend")
  .data(dataName)
  .enter()
  .append("g")
  .attr("class", "legend")
  .attr("transform", function(d, i) { return "translate(200," + (i * 20 - 100) + ")"; });

// set sum data color to the legend
legend.append("rect")
  .attr("x", 180)
  .attr("y", 0)
  .attr("width", 15)
  .attr("height", 15)
  .style("fill", function(d, i) { return color(i); })
  .style("opacity", 0.7);



// fit sum data full name to the legend
legend.append("text")
  .attr("x", 200)
  .attr("y", 10)
  .attr("dy", ".35em")
  .style("text-anchor", "start")
  .style("font-size", 12)
  .text(function(d) { return d; });

// make title for the pie chart
svg.append("text")
  .attr("x", 0)
  .attr("y", -250)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("Total Test Around Country Depanding From Descading and Population");

// make title for the legend
svg.append("text")
  .attr("x", 400)
  .attr("y", -120)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .style("text-decoration", "underline")
  .text("Legend");

// make button to change the value of the pie chart
d3.select("#button1").on("click", change);

// change the value of the pie chart
function change() {
    const value = [125, 145];
  const sum = value.reduce((a, b) => a + b, 0);
  const dataPercentage = value.map((d) => (d / sum) * 100);

  const arcs = pie(value);
  
  // set sum data name to the legend
    const dataName = ["Female Having Lung Cancer", "Male Having Lung Cancer"];
  // change legend value
    svg.selectAll(".legend")
    .data(dataName)
    .transition()
    .duration(1000)
    .attr("transform", function(d, i) { return "translate(200," + (i * 20 - 100) + ")"; });

    // change legend color
    svg.selectAll(".legend rect")
    .data(dataName)
    .transition()
    .duration(1000)
    .style("fill", function(d, i) { return color(i); });

    // change legend text
    svg.selectAll(".legend text")
    .data(dataName)
    .transition()
    .duration(1000)
    .text(function(d) { return d; });

  svg.selectAll("path")
    .data(arcs)
    .transition()
    .duration(1000)
    .attr("d", arc)
    .attr("fill", function(d) { return color(d.data); })
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 0.7);

  svg.selectAll("text")
    .data(arcs)
    .transition()
    .duration(1000)
    .text(function(d, i) { return dataPercentage[i].toFixed(1) + "%"; })
    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
    .style("text-anchor", "middle")
    .style("font-size", 12)
    .style("fill", "white");
}

// make button to change the value of the pie chart
d3.select("#button2").on("click", change1);

// change the value of the pie chart
function change1() {
    const value = [799, 1378, 1622, 3539, 4965, 5759, 6115, 9945, 10903, 10982];
    const sum = value.reduce((a, b) => a + b, 0);
    const dataPercentage = value.map((d) => (d / sum) * 100);

    const arcs = pie(value);

    // set sum data name to the legend
        const dataName = ["Vatican City", "Tokelau", "Niue", "Falkland Islands", "Montserrat", "Saint Pierre Miquelon", "Saint Helena", "St. Barth", "Nauru", "Wallis and Futuna"];
    // change legend value
        svg.selectAll(".legend")
        .data(dataName)
        .transition()
        .duration(1000)
        .attr("transform", function(d, i) { return "translate(200," + (i * 20 - 100) + ")"; });

        // change legend color
        svg.selectAll(".legend rect")
        .data(dataName)
        .transition()
        .duration(1000)
        .style("fill", function(d, i) { return color(i); });

        // change legend text
        svg.selectAll(".legend text")
        .data(dataName)
        .transition()
        .duration(1000)
        .text(function(d) { return d; });

    svg.selectAll("path")
        .data(arcs)
        .transition()
        .duration(1000)
        .attr("d", arc)
        .attr("fill", function(d) { return color(d.data); })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.9);

    svg.selectAll("text")
        .data(arcs)
        .transition()
        .duration(1000)
        .text(function(d, i) { return dataPercentage[i].toFixed(1) + "%"; })
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
        .style("text-anchor", "middle")
        .style("font-size", 12)
        .style("fill", "white");
}

// make button to go back to the previous data of the pie chart
d3.select("#button").on("click", change2);

// go back to the previous data of the pie chart
function change2() {
    // change value to the previous data
        const value = [7850, 8632, 17762, 18901, 19690, 20508, 20509, 23693, 24976, 25400];
        const sum = value.reduce((a, b) => a + b, 0);
        const dataPercentage = value.map((d) => (d / sum) * 100);

    
    const arcs = pie(value);
    
    // set sum data name to the legend
        const dataName = ["Macao", "Falkland Islands", "Montserrat", "Antigua and Barbuda", "Cook Islands", "Wallis and Futuna", "Nauru", "Eritrea", "Vanuatu", "Saint Pierre Miquelon"];
    // change legend value
        svg.selectAll(".legend")
        .data(dataName)
        .transition()
        .duration(1000)
        .attr("transform", function(d, i) { return "translate(200," + (i * 20 - 100) + ")"; });
    
        // change legend color
        svg.selectAll(".legend rect")
        .data(dataName)
        .transition()
        .duration(1000)
        .style("fill", function(d, i) { return color(i); });
    
        // change legend text
        svg.selectAll(".legend text")
        .data(dataName)
        .transition()
        .duration(1000)
        .text(function(d) { return d; });
    
    svg.selectAll("path")
        .data(arcs)
        .transition()
        .duration(1000)
        .attr("d", arc)
        .attr("fill", function(d) { return color(d.data); })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.9);
    
    svg.selectAll("text")
        .data(arcs)
        .transition()
        .duration(1000)
        .text(function(d, i) { return dataPercentage[i].toFixed(1) + "%"; })
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
        .style("text-anchor", "middle")
        .style("font-size", 12)
        .style("fill", "white");
    }




