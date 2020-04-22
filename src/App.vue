<template>
  <div id="app">
    <div class="mh-container">
      <Menu />
      <div class="mh-wrapper mh-clearfix">
        <router-view></router-view>
        <!-- <test/> -->
        <Aside />
      </div>
      <CopyRight />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Menu from "./components/Menu.vue";
import Aside from "./components/Aside.vue";
import CopyRight from "./components/CopyRight.vue";

// import test from './components/BulmaTest'
import "bulma";
import "../static/css/style.css";
import "../static/css/font-awesome.min.css";
import "../static/js/script.js";
export default {
  name: "App",
  components: {
    // HelloWorld,
    Menu,
    Aside,
    CopyRight
    // test,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
