d3.json("data/ages.json").then(function (data) {
  data.forEach(function(d) {
    d.age = +d.age;
  });

  var svg = d3.select("#chart-area")
            .append("svg")
            .attr("width", 500)
            .attr("height", 400);

  var circles = svg.selectAll("circle").data(data);

  circles.enter()
          .append("circle")
          .attr("cx", function(d, i) {
            console.log(d);
            return (i * 50) + 25;
          })
          .attr("cy", 200)
          .attr("r", function(d) {
            return d.age * 2;
          })
          .attr("fill", function(d) {
            if (d.name == "Tony") {
              return "blue";
            } else {
              return "red";
            }
          });
}).catch(function(error) {
  console.log(error);
});