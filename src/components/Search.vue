<template>
  <div>
    <search-box :showHeader="true"/>
    <tags/>
    <custom-posts/>
  </div>
</template>

<script>
// import {mapState} from 'vuex';
import customPosts from './CustomPosts.vue';
import tags from './Tags.vue';
import searchBox from './SearchBox.vue';

export default {
  // computed:mapState(['tags']),
  // mounted() {
  //   this.$store.dispatch('FETCH_TAGS');
  // },
  components:{
    customPosts,
    tags,
    searchBox,
  }
}
</script>