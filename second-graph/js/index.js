d3.json("data/buildings.json").then(function(data) {
  data.forEach(d => {
    d.height = +d.height;
  });

  var svg = d3.select("#chart-area")
              .append("svg")
              .attr("width", 500)
              .attr("height", 400);

  var y = d3.scaleLinear()
            .domain([0, 828])
            .range([0, 400]);

  var x = d3.scaleLog()
            .domain([300, 150000])
            .range([0, 400])
            .base(10)

var rects = svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("y", 20)
                .attr("x", function(d, i) {
                  return x(i * 60)
                })
                .attr("width", 40)
                .attr("height", function(d) {
                  return y(d.height);
                })
                .attr("fill", function(d) {
                  return "#6610f2";
                })
});



