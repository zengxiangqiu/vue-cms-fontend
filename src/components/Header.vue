<template>
  <header class="mh-header">
    <div class="mh-site-logo" >
      <div class="mh-header-text">
        <a href='/' class="mh-header-text-link">
          <h1 class="mh-header-title">田间小站</h1>
        </a>
      </div>
    </div>
    <Entry-Menu/>
  </header>
</template>

<script>
import EntryMenu from './Menu.vue'

export default {
  components:{
    // eslint-disable-next-line vue/no-unused-components
    EntryMenu
  }
}
</script>