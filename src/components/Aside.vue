<template>
  <aside class="mh-sidebar">
    <searchbox/>
    <customposts :entries='entries'/>
  </aside>
</template>

<script>

import searchbox from './SearchBox.vue';
import customposts from './CustomPosts.vue'

export default {
  components:{
    searchbox,
    customposts,
  },
  data() {
    return {
      entries:[]
    }
  },
}
</script>