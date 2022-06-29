<template>
  <div class="tree">
    <router-link to="/tree/one">树图:addChild</router-link> |
    <router-link to="/tree/two">树图：紧凑树</router-link>｜
    <router-link to="/tree/three">树图：脑树</router-link>｜
    <router-link to="/tree/four">树图：缩进树</router-link>｜
    <router-link to="/tree/five">树图：生态辐射树</router-link>｜
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tree {
  margin-top: 30px;
 
}
.active {
  font-weight: 600;
  color: blueviolet;
}
</style>
