    d3.select("body")
      .append("svg")
        .attr("width",250)
        .attr("height",50)
      .append("text")
        .text("Text from D3")
        .attr("y",25)
        .attr("x",0)
        .style("fill","blue");