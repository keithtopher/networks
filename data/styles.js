var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.8.2",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "background-color" : "rgb(137,208,245)",
      "border-width" : 0.0,
      "font-size" : 12,
      "border-color" : "rgb(204,204,204)",
      "border-opacity" : 1.0,
      "background-opacity" : 1.0,
      "height" : 35.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "color" : "rgb(0,0,0)",
      "width" : 75.0,
      "shape" : "roundrectangle",
      "text-opacity" : 1.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "source-arrow-shape" : "none",
      "target-arrow-shape" : "none",
      "content" : "",
      "color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "opacity" : 1.0,
      "font-size" : 10,
      "width" : 2.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(132,132,132)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.8.2",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Proteomics",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "background-color" : "rgb(200,0,0)",
      "border-width" : 2.0,
      "font-size" : 10,
      "border-color" : "rgb(0,0,0)",
      "border-opacity" : 1.0,
      "background-opacity" : 1.0,
      "height" : 60.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "color" : "rgb(0,0,0)",
      "width" : 60.0,
      "shape" : "ellipse",
      "text-opacity" : 1.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Degree > 14]",
    "css" : {
      "background-color" : "rgb(102,37,6)"
    }
  }, {
    "selector" : "node[Degree = 14]",
    "css" : {
      "background-color" : "rgb(153,52,4)"
    }
  }, {
    "selector" : "node[Degree >= 7][Degree < 14]",
    "css" : {
      "background-color" : "mapData(Degree,7,14,rgb(254,153,41),rgb(153,52,4))"
    }
  }, {
    "selector" : "node[Degree > 0][Degree < 7]",
    "css" : {
      "background-color" : "mapData(Degree,0,7,rgb(255,247,188),rgb(254,153,41))"
    }
  }, {
    "selector" : "node[Degree = 0]",
    "css" : {
      "background-color" : "rgb(255,247,188)"
    }
  }, {
    "selector" : "node[Degree < 0]",
    "css" : {
      "background-color" : "rgb(255,255,229)"
    }
  }, {
    "selector" : "node[degree > 16]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree = 16]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree > 13][degree < 16]",
    "css" : {
      "color" : "mapData(degree,13,16,rgb(255,255,255),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[degree = 13]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree < 13]",
    "css" : {
      "color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "source-arrow-shape" : "none",
      "target-arrow-shape" : "none",
      "content" : "",
      "color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "opacity" : 1.0,
      "font-size" : 10,
      "width" : 2.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(64,64,64)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge[weight > 1]",
    "css" : {
      "line-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge[weight = 1]",
    "css" : {
      "line-color" : "rgb(37,37,37)"
    }
  }, {
    "selector" : "edge[weight >= 0.5][weight < 1]",
    "css" : {
      "line-color" : "mapData(weight,0.5,1,rgb(150,150,150),rgb(37,37,37))"
    }
  }, {
    "selector" : "edge[weight > 0][weight < 0.5]",
    "css" : {
      "line-color" : "mapData(weight,0,0.5,rgb(240,240,240),rgb(150,150,150))"
    }
  }, {
    "selector" : "edge[weight = 0]",
    "css" : {
      "line-color" : "rgb(240,240,240)"
    }
  }, {
    "selector" : "edge[weight < 0]",
    "css" : {
      "line-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "edge[weight > 1]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[weight = 1]",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[weight > 0][weight < 1]",
    "css" : {
      "width" : "mapData(weight,0,1,1.0,3.0)"
    }
  }, {
    "selector" : "edge[weight = 0]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[weight < 0]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.8.2",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Imaging",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "background-color" : "rgb(200,0,0)",
      "border-width" : 2.0,
      "font-size" : 10,
      "border-color" : "rgb(0,0,0)",
      "border-opacity" : 1.0,
      "background-opacity" : 1.0,
      "height" : 60.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "color" : "rgb(0,0,0)",
      "width" : 60.0,
      "shape" : "ellipse",
      "text-opacity" : 1.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Degree > 12]",
    "css" : {
      "background-color" : "rgb(127,0,0)"
    }
  }, {
    "selector" : "node[Degree = 12]",
    "css" : {
      "background-color" : "rgb(179,0,0)"
    }
  }, {
    "selector" : "node[Degree >= 6][Degree < 12]",
    "css" : {
      "background-color" : "mapData(Degree,6,12,rgb(252,141,89),rgb(179,0,0))"
    }
  }, {
    "selector" : "node[Degree > 0][Degree < 6]",
    "css" : {
      "background-color" : "mapData(Degree,0,6,rgb(254,232,200),rgb(252,141,89))"
    }
  }, {
    "selector" : "node[Degree = 0]",
    "css" : {
      "background-color" : "rgb(254,232,200)"
    }
  }, {
    "selector" : "node[Degree < 0]",
    "css" : {
      "background-color" : "rgb(255,247,236)"
    }
  }, {
    "selector" : "node[degree > 12]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree = 12]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree > 10][degree < 12]",
    "css" : {
      "color" : "mapData(degree,10,12,rgb(255,255,255),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[degree = 10]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree < 10]",
    "css" : {
      "color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "source-arrow-shape" : "none",
      "target-arrow-shape" : "none",
      "content" : "",
      "color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "opacity" : 1.0,
      "font-size" : 10,
      "width" : 2.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(64,64,64)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge[weight > 1]",
    "css" : {
      "line-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge[weight = 1]",
    "css" : {
      "line-color" : "rgb(37,37,37)"
    }
  }, {
    "selector" : "edge[weight >= 0.5][weight < 1]",
    "css" : {
      "line-color" : "mapData(weight,0.5,1,rgb(150,150,150),rgb(37,37,37))"
    }
  }, {
    "selector" : "edge[weight > 0][weight < 0.5]",
    "css" : {
      "line-color" : "mapData(weight,0,0.5,rgb(240,240,240),rgb(150,150,150))"
    }
  }, {
    "selector" : "edge[weight = 0]",
    "css" : {
      "line-color" : "rgb(240,240,240)"
    }
  }, {
    "selector" : "edge[weight < 0]",
    "css" : {
      "line-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "edge[weight > 1]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[weight = 1]",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[weight > 0][weight < 1]",
    "css" : {
      "width" : "mapData(weight,0,1,1.0,3.0)"
    }
  }, {
    "selector" : "edge[weight = 0]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[weight < 0]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.8.2",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Cytomics",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "background-color" : "rgb(200,0,0)",
      "border-width" : 2.0,
      "font-size" : 10,
      "border-color" : "rgb(0,0,0)",
      "border-opacity" : 1.0,
      "background-opacity" : 1.0,
      "height" : 60.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "color" : "rgb(0,0,0)",
      "width" : 60.0,
      "shape" : "ellipse",
      "text-opacity" : 1.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Degree > 16]",
    "css" : {
      "background-color" : "rgb(0,69,41)"
    }
  }, {
    "selector" : "node[Degree = 16]",
    "css" : {
      "background-color" : "rgb(0,104,55)"
    }
  }, {
    "selector" : "node[Degree >= 8][Degree < 16]",
    "css" : {
      "background-color" : "mapData(Degree,8,16,rgb(120,198,121),rgb(0,104,55))"
    }
  }, {
    "selector" : "node[Degree > 0][Degree < 8]",
    "css" : {
      "background-color" : "mapData(Degree,0,8,rgb(247,252,185),rgb(120,198,121))"
    }
  }, {
    "selector" : "node[Degree = 0]",
    "css" : {
      "background-color" : "rgb(247,252,185)"
    }
  }, {
    "selector" : "node[Degree < 0]",
    "css" : {
      "background-color" : "rgb(255,255,229)"
    }
  }, {
    "selector" : "node[degree > 16]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree = 16]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree > 13][degree < 16]",
    "css" : {
      "color" : "mapData(degree,13,16,rgb(255,255,255),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[degree = 13]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree < 13]",
    "css" : {
      "color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "source-arrow-shape" : "none",
      "target-arrow-shape" : "none",
      "content" : "",
      "color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "opacity" : 1.0,
      "font-size" : 10,
      "width" : 2.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(64,64,64)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge[weight > 1]",
    "css" : {
      "line-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge[weight = 1]",
    "css" : {
      "line-color" : "rgb(37,37,37)"
    }
  }, {
    "selector" : "edge[weight >= 0.5][weight < 1]",
    "css" : {
      "line-color" : "mapData(weight,0.5,1,rgb(150,150,150),rgb(37,37,37))"
    }
  }, {
    "selector" : "edge[weight > 0][weight < 0.5]",
    "css" : {
      "line-color" : "mapData(weight,0,0.5,rgb(240,240,240),rgb(150,150,150))"
    }
  }, {
    "selector" : "edge[weight = 0]",
    "css" : {
      "line-color" : "rgb(240,240,240)"
    }
  }, {
    "selector" : "edge[weight < 0]",
    "css" : {
      "line-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "edge[weight > 1]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[weight = 1]",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[weight > 0][weight < 1]",
    "css" : {
      "width" : "mapData(weight,0,1,1.0,3.0)"
    }
  }, {
    "selector" : "edge[weight = 0]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[weight < 0]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.8.2",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Clinical",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "background-color" : "rgb(200,0,0)",
      "border-width" : 2.0,
      "font-size" : 10,
      "border-color" : "rgb(0,0,0)",
      "border-opacity" : 1.0,
      "background-opacity" : 1.0,
      "height" : 60.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "color" : "rgb(0,0,0)",
      "width" : 60.0,
      "shape" : "ellipse",
      "text-opacity" : 1.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Degree > 24]",
    "css" : {
      "background-color" : "rgb(8,48,107)"
    }
  }, {
    "selector" : "node[Degree = 24]",
    "css" : {
      "background-color" : "rgb(8,81,156)"
    }
  }, {
    "selector" : "node[Degree >= 12][Degree < 24]",
    "css" : {
      "background-color" : "mapData(Degree,12,24,rgb(107,174,214),rgb(8,81,156))"
    }
  }, {
    "selector" : "node[Degree > 0][Degree < 12]",
    "css" : {
      "background-color" : "mapData(Degree,0,12,rgb(222,235,247),rgb(107,174,214))"
    }
  }, {
    "selector" : "node[Degree = 0]",
    "css" : {
      "background-color" : "rgb(222,235,247)"
    }
  }, {
    "selector" : "node[Degree < 0]",
    "css" : {
      "background-color" : "rgb(247,251,255)"
    }
  }, {
    "selector" : "node[degree > 24]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree = 24]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree > 20][degree < 24]",
    "css" : {
      "color" : "mapData(degree,20,24,rgb(255,255,255),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[degree = 20]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree < 20]",
    "css" : {
      "color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "source-arrow-shape" : "none",
      "target-arrow-shape" : "none",
      "content" : "",
      "color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "opacity" : 1.0,
      "font-size" : 10,
      "width" : 2.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(64,64,64)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge[weight > 1]",
    "css" : {
      "line-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge[weight = 1]",
    "css" : {
      "line-color" : "rgb(37,37,37)"
    }
  }, {
    "selector" : "edge[weight >= 0.5][weight < 1]",
    "css" : {
      "line-color" : "mapData(weight,0.5,1,rgb(150,150,150),rgb(37,37,37))"
    }
  }, {
    "selector" : "edge[weight > 0][weight < 0.5]",
    "css" : {
      "line-color" : "mapData(weight,0,0.5,rgb(240,240,240),rgb(150,150,150))"
    }
  }, {
    "selector" : "edge[weight = 0]",
    "css" : {
      "line-color" : "rgb(240,240,240)"
    }
  }, {
    "selector" : "edge[weight < 0]",
    "css" : {
      "line-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "edge[weight > 1]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[weight = 1]",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[weight > 0][weight < 1]",
    "css" : {
      "width" : "mapData(weight,0,1,1.0,3.0)"
    }
  }, {
    "selector" : "edge[weight = 0]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[weight < 0]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.8.2",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Genomics",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "background-color" : "rgb(200,0,0)",
      "border-width" : 2.0,
      "font-size" : 20,
      "border-color" : "rgb(0,0,0)",
      "border-opacity" : 1.0,
      "background-opacity" : 1.0,
      "height" : 60.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "color" : "rgb(0,0,0)",
      "width" : 60.0,
      "shape" : "ellipse",
      "text-opacity" : 1.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Degree > 26]",
    "css" : {
      "background-color" : "rgb(73,0,106)"
    }
  }, {
    "selector" : "node[Degree = 26]",
    "css" : {
      "background-color" : "rgb(122,1,119)"
    }
  }, {
    "selector" : "node[Degree >= 13][Degree < 26]",
    "css" : {
      "background-color" : "mapData(Degree,13,26,rgb(247,104,161),rgb(122,1,119))"
    }
  }, {
    "selector" : "node[Degree > 0][Degree < 13]",
    "css" : {
      "background-color" : "mapData(Degree,0,13,rgb(253,224,221),rgb(247,104,161))"
    }
  }, {
    "selector" : "node[Degree = 0]",
    "css" : {
      "background-color" : "rgb(253,224,221)"
    }
  }, {
    "selector" : "node[Degree < 0]",
    "css" : {
      "background-color" : "rgb(255,247,243)"
    }
  }, {
    "selector" : "node[degree > 16]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree = 16]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree > 13][degree < 16]",
    "css" : {
      "color" : "mapData(degree,13,16,rgb(255,255,255),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[degree = 13]",
    "css" : {
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[degree < 13]",
    "css" : {
      "color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "source-arrow-shape" : "none",
      "target-arrow-shape" : "none",
      "content" : "",
      "color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "opacity" : 1.0,
      "font-size" : 10,
      "width" : 4.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(64,64,64)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge[weight > 0.2]",
    "css" : {
      "line-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge[weight = 0.2]",
    "css" : {
      "line-color" : "rgb(37,37,37)"
    }
  }, {
    "selector" : "edge[weight >= 0.1][weight < 0.2]",
    "css" : {
      "line-color" : "mapData(weight,0.1,0.2,rgb(150,150,150),rgb(37,37,37))"
    }
  }, {
    "selector" : "edge[weight > 0][weight < 0.1]",
    "css" : {
      "line-color" : "mapData(weight,0,0.1,rgb(240,240,240),rgb(150,150,150))"
    }
  }, {
    "selector" : "edge[weight = 0]",
    "css" : {
      "line-color" : "rgb(240,240,240)"
    }
  }, {
    "selector" : "edge[weight < 0]",
    "css" : {
      "line-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "edge[weight > 1]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[weight = 1]",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[weight > 0][weight < 1]",
    "css" : {
      "width" : "mapData(weight,0,1,1.0,3.0)"
    }
  }, {
    "selector" : "edge[weight = 0]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[weight < 0]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]