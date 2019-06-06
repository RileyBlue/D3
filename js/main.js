var data = [25, 20, 10, 12, 15];

var svg = d3.select("#chart-area")
            .append("svg")
            .attr("width", 500)
            .attr("height", 400);

var circles = svg.selectAll("circle").data(data);

circles.enter()
        .append("circle")
        .attr("cx", function(d, i) {
          console.log("Items: " + d, "Index: " + i);
          return (i * 50) + 25;
        })
        .attr("cy", 200)
        .attr("r", function(d) {
          console.log("Item: " + d);
          return d;
        })
        .attr("fill", "red");