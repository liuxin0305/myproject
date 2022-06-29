<template>
  <div class="normalmap">
    <router-link to="/normalmap/yi">一般图:力导向图</router-link> |
    <router-link to="/normalmap/er">一般图:Dagre 布局参数动态变化</router-link> |
    <router-link to="/normalmap/san">一般图：自动布局推荐</router-link> |
    <router-link to="/normalmap/si">一般图：Circular 布局参数动态变化
</router-link> |
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
.normalmap {
  margin-top: 30px;
  
}
</style>
