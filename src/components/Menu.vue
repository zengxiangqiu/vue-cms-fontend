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
            <subMenu :item ='item' :key="item.category" :nested='false'/>
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
import subMenu from './SubMenu'

export default {
  data() {
    return {};
  },
  components:{
    subMenu
  },
  computed: mapState(["menu"]),
  created() {
    this.$store.dispatch("FETCH_MENU");
  },
  methods: {
    SetCurrentLink: function(item,element){
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
      const el = document.querySelector('.navbar-burger');
      const target =  el.dataset.target;
      const $target = document.getElementById(target);
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
      try {
          if(element.target.parentElement.classList.contains('navbar-dropdown')){
            element.target.parentElement.parentElement.classList.toggle('is-hoverable');
          }
          else if(element.target.parentElement.classList.contains('has-dropdown')){
            element.target.parentElement.classList.toggle('is-hoverable');
          }
      // eslint-disable-next-line no-empty
      } catch (error) {
        
      }
    },
    ToggleDisplay : function(event){
      if(!event.target.parentElement.classList.contains('is-hoverable')){
        event.target.parentElement.classList.toggle('is-hoverable')
      }

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