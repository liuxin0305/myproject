<template>
  <div class="element">
    <router-link to="/element/a">元素:自定义节点-节点中嵌入 G2 的折线图
</router-link> ｜
<router-link to="/element/b">元素：地铁线路图</router-link> ｜
<router-link to="/element/c">元素：自定义节点-列表</router-link> ｜
    <router-view />
  </div>
</template>
<script>
export default {};
</script>

<style>
.element{
    margin-top: 30px;
}
</style>
