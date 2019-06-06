d3.json("data/buildings.json").then(function (data) {
  data.forEach(function(d) {
    d.height = +d.height;
  });

  var svg = d3.select("#chart-area")
            .append("svg")
            .attr("width", 500)
            .attr("height", 400);

  var rectangle = svg.selectAll("rect").data(data); 

  rectangle.enter()
            .append("rect")
            .attr("width", 30)
            .attr("height", function(d, i){
              return d.height;
            })
            .attr("y", 10)
            .attr("x", function(d, i) {
              return i * 60;
            })
            .attr("fill", "#6610f2");
  }).catch(error) {
    console.log(error);
  };