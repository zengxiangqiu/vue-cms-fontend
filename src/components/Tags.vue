<template>
  <div class="entry-tags mh-clearfix">
    <h4 class="mh-widget-title">
      <span class="mh-widget-title-inner">热门标签</span>
    </h4>
    <i class="fa fa-tag"></i>
    <ul>
      <li v-for="(tag,index) in tags" :key="index"><router-link :to="tag.link">{{ tag.title }}</router-link></li>
    </ul>
  </div>
</template>


<script>

import {mapState} from 'vuex';

export default {
  computed: mapState(['tags']),
  created() {
    this.$store.dispatch('FETCH_TAGS');
  },
}
</script>