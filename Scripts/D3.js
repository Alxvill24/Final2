d3.selectAll(".ig").on("click", function () {
  const url = d3.select(this).attr("data-url");
  const tab = d3.select(this).attr("data-tab");
  window.open(url, tab);
});
d3.selectAll("#link").on("click", function () {
  const url = d3.select(this).attr("data-url");
  const tab = d3.select(this).attr("data-tab");
  window.open(url, tab);
});
d3.selectAll(".textoheader")
  .on("click", function () {
    const url = d3.select(this).attr("data-url");
    const tab = d3.select(this).attr("data-tab");
    window.open(url, tab);
  })

  .on("mouseenter", function (event) {
    d3.select(this)
      .transition()
      .duration(10)
      .style("background-color", " #42c920")
      .style("color", "black")
      .style("border-radius", "10px");
  })

  .on("mouseout", function (event) {
    d3.select(this)
      .transition()
      .duration(1000)
      .style("background-color", "black")
      .style("color", "#42c920");
  });
d3.selectAll(".btn")
  .on("mouseenter", function (event) {
    d3.select(this)
      .transition()
      .duration(10)
      .style("background-color", " #42c920")
      .style("color", "black")
      .style("border-radius", "10px");
  })

  .on("mouseout", function (event) {
    d3.select(this)
      .transition()
      .duration(500)
      .style("background-color", "black")
      .style("color", "#42c920");
  });
d3.selectAll(".balastra")
  .on("mouseenter", function (event) {
    d3.select(this)
      .transition()
      .duration(10)
      .style("background-color", " red")
      .style("color", "whitesmoke")
      .style("border-radius", "10px");
  })

  .on("mouseout", function (event) {
    d3.select(this)
      .transition()
      .duration(500)
      .style("background-color", "whitesmoke")
      .style("color", "red");
  });
