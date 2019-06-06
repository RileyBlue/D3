d3.json("data/buildings.json").then(function(data) {
  data.forEach(d => {
    d.height = +d.height;
  });
  
  var svg = d3.select("#chart-area")
              .append("svg")
              .attr("width", 500)
              .attr("height", 400);

  var y = d3.scaleTime()
            .domain([new Date(2000, 0, 1), new Date(2001, 0, 1)])
            .range([0, 400]);
                
  var rects = svg.selectAll("rect")
                  .data(data)
                  .enter()
                  .append("rect")
                  .attr("y", 20)
                  .attr("x", function(d, i) {
                    return (i * 60);
                  })
                  .attr("width", 40)
                  .attr("height", function(d) {
                    return y(d.height);
                  })
                  .attr("fill", function(d) {
                    return "#6610f2";
                  })
  });
  
  
  
  