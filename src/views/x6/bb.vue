<template>
  <div class="bb">
    <h1>节点-群组</h1>
    <div id="bbinner"></div>
  </div>
</template>

<script>
import { Graph } from "@antv/x6";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initX6();
  },
  methods: {
    initX6() {
      const graph = new Graph({
        container: document.getElementById("bbinner"),
        grid: true,
      });

      const source = graph.addNode({
        x: 120,
        y: 40,
        width: 100,
        height: 40,
        label: "一",
        attrs: {
          body: {
            fill: "#f5f5f5",
            stroke: "#d9d9d9",
          },
        },
      });

      const target = graph.addNode({
        x: 400,
        y: 260,
        width: 100,
        height: 40,
        label: "二",
        attrs: {
          body: {
            fill: "#f5f5f5",
            stroke: "#d9d9d9",
          },
        },
      });
     
      graph.addEdge({
        source,
        target,
        router: {
          name: "er",
        },
        attrs: {
          line: {
            stroke: "red",
          },
        },
      });
    },
  },
};
</script>

<style>
#bbinner {
  width: 100vw;
  height: 100vh;
}
</style>
