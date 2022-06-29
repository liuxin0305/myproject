<template>
  <div id="app">
    <div id="nav">
      <router-link to="/tree">g6:树图 案例</router-link> 
      <router-link to="/normalmap">g6:一般图 案例</router-link>
       <router-link to="/element">g6:元素</router-link>
       <router-link to="/g2">g2</router-link>
     <router-link to="/x6">x6</router-link> 
     <router-link to="/l7">L7</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
 display: flex;
 justify-content:space-around ;
 align-items: center;
 

  .active {
    color: #42b983;
    font-weight: 800;
  }
}
</style>
