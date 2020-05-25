<template>
  <div v-if='item.children && !nested' class="navbar-item has-dropdown is-hoverable">
    <router-link :to="item.link" class="navbar-item">{{item.title}}</router-link>
    <div class="navbar-dropdown">
      <template v-for="tag in item.children" >
        <router-link class="navbar-item" :to='tag.link' :key="tag.category" v-if='!tag.children'>{{tag.title}}</router-link>
        <SubMenu v-if='tag.children' :item='tag' :nested='true' :key="tag.category"></SubMenu>
      </template>
    </div>
  </div>
  <div v-else-if="item.children && nested" class="nested navbar-item dropdown">
    <div class="dropdown-trigger">
      <router-link :to='item.link'>{{ item.title }}</router-link>
    </div>
    <div class="dropdown-menu">
      <div class="dropdown-content">
        <template v-for="tag in item.children" >
          <router-link class="navbar-item"  :to="tag.link" :key="tag.category" v-if='!tag.children'>{{tag.title}}</router-link>
          <SubMenu v-if='tag.children' :item='tag' :nested='true' :key="tag.category"></SubMenu>
        </template>
      </div>
    </div>
  </div>
  <div v-else class="navbar-item has-dropdown is-hoverable">
    <router-link :to='{path:item.link}' class="navbar-item">{{item.title}}</router-link>
  </div>
</template>

<script>
export default {
  name:'SubMenu',
  props:['item','nested'],
}
</script>

<style>
.nested.dropdown:hover > .dropdown-menu {
  display: block;
}
.nested.dropdown .dropdown-menu {
  top: -4px;
  margin-left: 100%;
}
.dropdown-content{
  background-color: black !important;
}
.nested.dropdown .dropdown-trigger button::after {
  content: "⦠";
}
.nested.dropdown .dropdown-trigger button {
  padding: 0px 0px;
  border: 0px;
  font-size: 14px;
  font-weight: 400;
  height: 2em;
}

.navbar-dropdown .navbar-item:hover {
  color: white;
  background-color: #e64946;
}
.navbar-item a{
  color: white;
}

.dropdown-content {
    border-radius: 0px !important; 
    padding-bottom: 0rem !important; 
    padding-top: 0rem !important;
}

.dropdown-trigger a:hover{
  color: white;
}

.router-link-exact-active{
  color: white;
  background-color: #e64946;
}

.is-hoverable:hover{
  color: white;
  background-color: #e64946;
}

.navbar-dropdown .navbar-item{
  min-width: 16rem;
  padding: 0 0;
}

.navbar-dropdown a{
  display: block;
}
.dropdown-menu .dropdown-content a.navbar-item, .dropdown-trigger a,.is-hoverable .navbar-dropdown a{
  padding: 0.5rem 1rem;
}

.navbar-dropdown .dropdown-trigger{
  min-width: 16rem;
}

</style>