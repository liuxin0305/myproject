// AntV G6 树图 addChild 案例
<template>
  <div id="one">
    <h1>AntV G6 树图 addChild 案例</h1>
    <div id="oneinner"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  name: "Home",
  data() {
    return {
      graph: "",
      data: {
        isRoot: true,
        id: "Root",
        style: {
          fill: "red",
        },
        children: [
          {
            id: "SubTreeNode1",
            raw: {},
            children: [
              {
                id: "SubTreeNode1.1",
              },
              {
                id: "SubTreeNode1.2",
                children: [
                  {
                    id: "SubTreeNode1.2.1",
                  },
                  {
                    id: "SubTreeNode1.2.2",
                  },
                  {
                    id: "SubTreeNode1.2.3",
                  },
                ],
              },
            ],
          },
          {
            id: "SubTreeNode2",
            children: [
              {
                id: "SubTreeNode2.1",
              },
            ],
          },
          {
            id: "SubTreeNode3",
            children: [
              {
                id: "SubTreeNode3.1",
              },
              {
                id: "SubTreeNode3.2",
              },
              {
                id: "SubTreeNode3.3",
              },
            ],
          },
          {
            id: "SubTreeNode4",
          },
          {
            id: "SubTreeNode5",
          },
          {
            id: "SubTreeNode6",
          },
        ],
      },
    };
  },
  mounted() {
    this.initChild();
    this.addChildNode(this.graph);
  },
  methods: {
    //渲染 实例化G6——>点node——>边edge,之后data数据，render渲染到图上
    initChild() {
      const container = document.getElementById("oneinner");
      const width = container.scrollWidth;
      const height = container.scrollHeight || 500;
      this.graph = new G6.TreeGraph({
        container: "oneinner",
        width,
        height,
        modes: {
          default: ["collapse-expand", "drag-canvas"],
        },
        fitView: true,
        layout: {
          type: "compactBox",
          direction: "LR",
          defalutPosition: [],
          getId: function getId(d) {
            return d.id;
          },
          getHeight: function getHeight() {
            return 16;
          },
          getWidth: function getWidth() {
            return 16;
          },
          getVGap: function getVGap() {
            return 50;
          },
          getHGap: function getHGap() {
            return 100;
          },
        },
      });
      this.graph.node(function (node) {
        return {
          size: 16,
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
          style: {
            fill: "#DEE9FF",
            stroke: "#5B8FF9",
          },
          label: node.id,
          labelCfg: {
            position:
              node.children && node.children.length > 0 ? "left" : "right",
          },
        };
      });

      this.graph.edge(function () {
        return {
          type: "cubic-horizontal",
          color: "#A3B1BF",
        };
      });
      this.graph.data(this.data);
      this.graph.render();
      // this.addChildNode(this.graph);
      if (typeof window !== "undefined")
        window.onresize = () => {
          if (!this.graph || this.graph.get("destroyed")) return;
          if (!container || !container.scrollWidth || !container.scrollHeight)
            return;
          this.graph.changeSize(container.scrollWidth, container.scrollHeight);
        };
    },
    //新增子
    addChildNode(graph) {
      let count = 0;
      graph.on("node:click", function (evt) {
        const item = evt.item;
        const nodeId = item.get("id");
        const model = item.getModel();
        const childre = model.children;
        console.log("11111111111", childre);
        if (!childre || childre.length === 0) {
          const childData = {
            id: "child-data-" + count,
            type: "rect",
            children: [
              {
                id: "x-" + count,
              },
              {
                id: "y-" + count,
              },
              {
                id: "z-" + count,
              },
            ],
          };
          graph.addChild(childData, nodeId);
          graph.layout();
          count++;
        }
      });
    },
  },
};
</script>
<style>
.home {
  width: 100%;
  height: 500px;
}
</style>
