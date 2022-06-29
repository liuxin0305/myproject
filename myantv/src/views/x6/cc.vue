<template>
  <div class="cc">
    <h1>画布</h1>
    <div id="ccinner"></div>
  </div>
</template>

<script>
import { Graph } from "@antv/x6";
export default {
  mounted() {
    this.initX6();
  },
  methods: {
    initX6() {
      const container = document.getElementById("ccinner");
      const graph = new Graph({
        container: container,
        resizing: true,
        background: {
          color: "#f5f5f5",
        },
        grid: {
          visible: true,
        },
        scroller: {
          enabled: true,
          pageVisible: true,
          pageBreak: true,
          pannable: true,
        },
        mousewheel: {
          enabled: true,
          modifiers: ["ctrl", "meta"],
          minScale: 0.5,
          maxScale: 2,
        },
      });

      const rect = graph.addNode({
        shape: "rect",
        x: 300,
        y: 300,
        width: 90,
        height: 60,
        attrs: {
          body: {
            fill: "#ff9c6e",
            stroke: "#ff7a45",
          },
          label: {
            text: "A",
          },
        },
      });

      rect.on("removed", () => {
        console.log("rect was removed");
      });

      const circle = graph.addNode({
        shape: "circle",
        x: 400,
        y: 400,
        width: 40,
        height: 40,
        attrs: {
          body: {
            fill: "#d3f261",
            stroke: "#bae637",
          },
          label: {
            text: "B",
          },
        },
      });

      graph.addEdge({
        source: rect,
        target: circle,
      });

      graph.center();
    },
  },
};
</script>

<style>
#ccinner {
  width: 100vw;
  height: 100vh;
}
</style>
