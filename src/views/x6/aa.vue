<template>
  <div class="aa">
    <h1>节点</h1>
    <div id="aainner"></div>
  </div>
</template>

<script>
import { Graph } from "@antv/x6";
export default {
  data() {
    return {};
  },
  mounted() {
    const graph = new Graph({
      container: document.getElementById("aainner"),
      grid: true,
    });

    // row 1
    // -----
    graph.addNode({
      shape: "ellipse",
      x: 40,
      y: 40,
      width: 120,
      height: 60,
      label: "一",
    });

    graph.addNode({
      shape: "ellipse",
      x: 200,
      y: 40,
      width: 120,
      height: 60,
      label: "ellipse",
      attrs: {
        body: {
          fill: "#efdbff",
          stroke: "#9254de",
        },
      },
    });

    graph.addNode({
      shape: "ellipse",
      x: 360,
      y: 40,
      width: 120,
      height: 60,
      label: "ellipse",
      attrs: {
        body: {
          stroke: "#237804",
          fill: "#73d13d",
        },
      },
    });

    graph.addNode({
      shape: "ellipse",
      x: 520,
      y: 40,
      width: 60,
      height: 60,
      label: "ellipse",
      attrs: {
        body: {
          stroke: "#ffa940",
          fill: "#ffd591",
        },
      },
    });

    // row 2
    // -----

    graph.addNode({
  shape: 'circle',
  x: 40,
  y: 140,
  width: 60,
  height: 60,
  label: 'circle',
  attrs: {
    label: {
      refX: 16,
      refY: 16,
      textAnchor: 'start',
      textVerticalAnchor: 'top',
    },
  },
})

graph.addNode({
  shape: 'circle',
  x: 200,
  y: 140,
  width: 60,
  height: 60,
  label: 'circle',
  attrs: {
    body: {
      fill: '#efdbff',
      stroke: '#9254de',
    },
    label: {
      refX: 16,
      refY: 0.5,
      textAnchor: 'start',
      textVerticalAnchor: 'middle',
    },
  },
})

graph.addNode({
  shape: 'circle',
  x: 360,
  y: 140,
  width: 60,
  height: 60,
  label: 'circle',
  attrs: {
    body: {
      stroke: '#237804',
      fill: '#73d13d',
    },
    label: {
      refX: 16,
      refY: '100%',
      refY2: -16,
      textAnchor: 'start',
      textVerticalAnchor: 'bottom',
    },
  },
})

graph.addNode({
  shape: 'circle',
  x: 520,
  y: 140,
  width: 60,
  height: 60,
  label: 'circle',
  attrs: {
    body: {
      stroke: '#ffa940',
      fill: '#ffd591',
    },
    label: {
      refX: 0.5,
      refY: -4,
      textAnchor: 'middle',
      textVerticalAnchor: 'bottom',
    },
  },
})

    // row 3
    // -----

    graph.addNode({
      shape: "ellipse",
      x: 40,
      y: 240,
      width: 120,
      height: 60,
      label: "ellipse",
      attrs: {
        label: {
          refX: 0.5,
          refY: 16,
          textAnchor: "middle",
          textVerticalAnchor: "top",
        },
      },
    });

    graph.addNode({
      shape: "ellipse",
      x: 200,
      y: 240,
      width: 120,
      height: 60,
      label: "ellipse",
      attrs: {
        body: {
          fill: "#efdbff",
          stroke: "#9254de",
        },
        label: {
          refX: 0.5,
          refY: 0.5,
          textAnchor: "middle",
          textVerticalAnchor: "middle",
        },
      },
    });

    graph.addNode({
      shape: "ellipse",
      x: 360,
      y: 240,
      width: 120,
      height: 60,
      label: "ellipse",
      attrs: {
        body: {
          stroke: "#237804",
          fill: "#73d13d",
        },
        label: {
          refX: 0.5,
          refY: "100%",
          refY2: -16,
          textAnchor: "middle",
          textVerticalAnchor: "bottom",
        },
      },
    });

    graph.addNode({
      shape: "ellipse",
      x: 520,
      y: 240,
      width: 60,
      height: 60,
      label: "ellipse",
      attrs: {
        body: {
          stroke: "#ffa940",
          fill: "#ffd591",
        },
        label: {
          refX: "100%",
          refX2: 4,
          refY: 0.5,
          textAnchor: "start",
          textVerticalAnchor: "middle",
        },
      },
    });

    // row 4
    // -----

   graph.addNode({
  x: 40,
  y: 340,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    label: {
      refX: '100%',
      refX2: -8,
      refY: 8,
      textAnchor: 'end',
      textVerticalAnchor: 'top',
    },
  },
})

graph.addNode({
  x: 200,
  y: 340,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      fill: '#efdbff',
      stroke: '#9254de',
    },
    label: {
      refX: '100%',
      refX2: -8,
      refY: 0.5,
      textAnchor: 'end',
      textVerticalAnchor: 'middle',
    },
  },
})

graph.addNode({
  x: 360,
  y: 340,
  width: 120,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#237804',
      fill: '#73d13d',
      rx: 10,
      ry: 10,
    },
    label: {
      refX: '100%',
      refX2: -8,
      refY: '100%',
      refY2: -8,
      textAnchor: 'end',
      textVerticalAnchor: 'bottom',
    },
  },
})

graph.addNode({
  x: 520,
  y: 340,
  width: 60,
  height: 60,
  label: 'rect',
  attrs: {
    body: {
      stroke: '#ffa940',
      fill: '#ffd591',
      rx: 10,
      ry: 10,
    },
    label: {
      refX: 0.5,
      refY: '100%',
      refY2: 4,
      textAnchor: 'middle',
      textVerticalAnchor: 'top',
    },
  },
})
    
  },
};
</script>

<style>
#aainner{
    width: 100vw;
    height: 100vh;
}
</style>
