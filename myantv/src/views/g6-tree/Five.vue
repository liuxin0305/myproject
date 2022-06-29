<template>
  <div class="five">
    <h1>生态辐射树</h1>
    <div id="fiveinner"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initG6();
  },
  methods: {
    initG6() {
      fetch(
        "https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json"
      )
        .then((res) => res.json())
        .then((data) => {
          const container = document.getElementById("fiveinner");
          const width = container.scrollWidth;
          const height = container.scrollHeight || 500;
          const graph = new G6.TreeGraph({
            container: "fiveinner",
            width,
            height,
            linkCenter: true,
            modes: {
              default: [
                {
                  type: "collapse-expand",
                  onChange: function onChange(item, collapsed) {
                    const data = item.get("model");
                    data.collapsed = collapsed;
                    return true;
                  },
                },
                "drag-canvas",
                "zoom-canvas",
              ],
            },
            defaultNode: {
              size: 26,
            },
            layout: {
              type: "dendrogram",
              direction: "LR",
              nodeSep: 20,
              rankSep: 100,
              radial: true,
            },
          });

          graph.node(function (node) {
            return {
              label: node.id,
            };
          });

          graph.data(data);
          graph.render();
          graph.fitView();

          if (typeof window !== "undefined")
            window.onresize = () => {
              if (!graph || graph.get("destroyed")) return;
              if (
                !container ||
                !container.scrollWidth ||
                !container.scrollHeight
              )
                return;
              graph.changeSize(container.scrollWidth, container.scrollHeight);
            };
        });
    },
  },
};
</script>

<style></style>
