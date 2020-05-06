<template>
  <aside class="mh-sidebar">
    <searchbox :showHeader="false"/>
    <customposts/>
    <tags/>
  </aside>
</template>

<script>

import searchbox from './SearchBox.vue';
import customposts from './CustomPosts.vue';
import tags from './Tags.vue';

export default {
  components:{
    searchbox,
    customposts,
    tags
  },

}
</script>