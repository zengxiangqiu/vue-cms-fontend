<template>
  <div id="app">
    <div class="mh-container mh-container-outer">
      <Header/>
      <div class="mh-wrapper mh-clearfix">
        <transition name="fade">
            <router-view :key="$route.fullPath" v-show="visiable"></router-view>
        </transition>
        <keep-alive>
          <router-view name="aside" v-if="visiable"></router-view>
        </keep-alive>
      </div>
      <CopyRight />
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-in;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
import Header from "./components/Header.vue";
import CopyRight from "./components/CopyRight.vue";
import { mapState } from "vuex";
import "bulma";
import "../static/css/style.css";
import "../static/css/font-awesome.min.css";
import "../static/js/script.js";

export default {
  name: "App",
  computed: mapState(["visiable"]),
  components: {
    Header,
    CopyRight
  }
};
</script>

