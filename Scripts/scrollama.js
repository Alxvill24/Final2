var scroller1 = scrollama();
var scroller2 = scrollama();
var scroller3 = scrollama();
var scroller4 = scrollama();
var scroller5 = scrollama();
function apareceFoto1(info) {
  d3.select("#escena1")
    .select("img")
    .transition()
    .duration(800)
    .style("transform", "translate(0px, 0px)")
    .style("opacity", "1.0");
}

function desapareceFoto1(info) {
  d3.select("#escena1")
    .select("img")
    .transition()
    .duration(600)
    .style("transform", "translate(100px, 0px)")
    .style("opacity", "0.0");
}
function apareceFoto2(info) {
  d3.select("#escena2")
    .select("img")
    .transition()
    .duration(800)
    .style("transform", "translate(0px, 0px)")
    .style("opacity", "1.0");
}

function desapareceFoto2(info) {
  d3.select("#escena2")
    .select("img")
    .transition()
    .duration(600)
    .style("transform", "translate(100px, 0px)")
    .style("opacity", "0.0");
}
function apareceFoto3(info) {
  d3.select("#escena3")
    .select("img")
    .transition()
    .duration(800)
    .style("transform", "translate(0px, 0px)")
    .style("opacity", "1.0");
}

function desapareceFoto3(info) {
  d3.select("#escena3")
    .select("img")
    .transition()
    .duration(600)
    .style("transform", "translate(100px, 0px)")
    .style("opacity", "0.0");
}
function apareceFoto4(info) {
  d3.select("#escena4")
    .select("img")
    .transition()
    .duration(800)
    .style("transform", "translate(0px, 0px)")
    .style("opacity", "1.0");
}

function desapareceFoto4(info) {
  d3.select("#escena4")
    .select("img")
    .transition()
    .duration(600)
    .style("transform", "translate(100px, 0px)")
    .style("opacity", "0.0");
}

function play(info) {
  d3.select("#escena5").select("iframe").play();
}

function pausa(info) {
  d3.select("#escena5").select("iframe").pause();
}
function escalaVideo(info) {
  //console.log(info.progress);
  let escalaV = d3.scaleLinear().domain([0, 0.5]).range([0, 720]);
  let opa = d3.scaleLinear().domain([0, 0.5]).range([0, 1]);
  d3.select("#escena5")
    .select("iframe")
    .style("width", `${escalaV(info.progress)}px`)
    .style("opacity", opa(info.progress));
}

scroller1
  .setup({
    step: "#escena1",
    offset: 0.25
  })
  .onStepEnter(apareceFoto1)
  .onStepExit(desapareceFoto1);

scroller2
  .setup({
    step: "#escena2",
    offset: 0.25
  })
  .onStepEnter(apareceFoto2)
  .onStepExit(desapareceFoto2);
scroller3
  .setup({
    step: "#escena3",
    offset: 0.25
  })
  .onStepEnter(apareceFoto3)
  .onStepExit(desapareceFoto3);
scroller4
  .setup({
    step: "#escena4",
    offset: 0.25
  })
  .onStepEnter(apareceFoto4)
  .onStepExit(desapareceFoto4);
scroller5
  .setup({
    step: "#escena5",
    progress: true,
    offset: 1
  })
  .onStepProgress(escalaVideo)
  .onStepEnter(play)
  .onStepExit(pausa);
