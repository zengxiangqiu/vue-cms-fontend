<template>
  <div class="mh-main-nav-wrap mh-container">
    <nav class="navbar mh-main-nav mh-clearfix" role="navigation" aria-label="main navigation">
      <div>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu menu" id="navbarBasicExample">
        <div class="navbar-start">
          <template v-for="item in menu">
            <div
              v-if="item.tags.length>0"
              class="navbar-item has-dropdown is-hoverable"
              :key="item.id"
            >
              <!-- <a @click.stop.prevent ='$router.push(item.link)'
                
                :class="[item.isSelect?'current-menu-item':'', 'menu-item','navbar-link' ]"
              >{{ item.title }}</a> -->
              <router-link :to="item.link"  :class="[item.isSelect?'current-menu-item':'', 'menu-item','navbar-link' ]" @click.native='SetCurrentLink(item)'>{{ item.title }} </router-link>
              <div class="navbar-dropdown">
                <!-- <a
                  :href="'/tag/'+tag.key"
                  v-for="tag in item.tags"
                  :key="tag.key"
                  class="navbar-item menu-item"
                >{{ tag.value }}</a> -->
              <router-link :to="'/tag/'+tag.key" v-for="tag in item.tags"  :key="tag.key" class='navbar-item menu-item' @click.native='SetCurrentLink(item)'>{{ tag.value }} </router-link>

              </div>
            </div>
            <!-- <a
              :class="[item.isSelect?'current-menu-item':'', 'menu-item','navbar-item' ]"
              :href="item.link"
              :key="item.id"
              v-else
            >{{ item.title }}</a> -->
              <router-link :to="item.link"  :class="[item.isSelect?'current-menu-item':'', 'menu-item','navbar-item' ]" @click.native='SetCurrentLink(item)' :key="item.id" 
              v-else>{{ item.title }} </router-link>
          </template>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.navbar-burger {
  color: #ebebeb;
}

.navbar-menu {
  min-height: 3rem;
}

.menu-item {
  display: block;
  color: #fff;
  padding: 10px 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}
</style>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: mapState(["menu"]),
  // eslint-disable-next-line no-unused-vars
  beforeCreate() {
    this.$store.dispatch("FETCH_MENU");
  },

  watch: {
    // eslint-disable-next-line no-unused-vars
    menu: function(val, oldVal) {
      var r = this.$route.params.category;
      var t = this.$route.params.tag;
      var i = this.$route.params.id;
      var m = this.$route.path.replace('/','');
      r = r || t || i || m || "/";
      try {
        val.find(x => x.category == r).isSelect = true;
      } catch (error) {
        return;
      }
    },
    // '$route' (to, from) {
    //   const toDepth = to.path.split('/').length
    //   const fromDepth = from.path.split('/').length
    //   this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    // }
  },
  methods: {
    SetCurrentLink: function(item){
      this.menu.forEach(subMenu=>{
        if(subMenu === item)
        {
          subMenu.isSelect = true;
        }
        else
        {
          subMenu.isSelect = false;
        }
      })
    }
  },

};

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
</script>