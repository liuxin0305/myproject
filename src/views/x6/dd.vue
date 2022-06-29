<template>
  <div class="dd">
    <h1>动画</h1>
    <div id="ddinner"></div>
  </div>
</template>

<script>
import { Graph, Vector } from "@antv/x6";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initX6();
  },
  methods: {
    initX6() {
      const container = document.getElementById("ddinner");
      const graph = new Graph({
        container: container,
      });

      const path = graph.addNode({
        shape: "path",
        x: 100,
        y: 200,
        width: 400,
        height: 80,
        path: "M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z",
        attrs: {
          body: {
            fill: "#EFF4FF",
            stroke: "#5F95FF",
          },
        },
      });

      const view = graph.findViewByCell(path);
      if (view) {
        const path = view.findOne("path");
        const token = Vector.create("circle", {
          r: 6,
          fill: "#5F95FF",
        });
        token.animateAlongPath(
          {
            dur: "5s",
            repeatCount: "indefinite",
          },
          path
        );
        token.appendTo(path.parentNode);
      }
    },
  },
};
</script>

<style>
#ddinner {
  width: 100vw;
  height: 100vh;
}
</style>
