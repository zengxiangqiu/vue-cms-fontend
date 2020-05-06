<template>
  <div>
    <search-box :showHeader="true"/>
    <tags/>
    <custom-posts/>
  </div>
</template>

<script>
import customPosts from '../components/CustomPosts';
import tags from '../components/Tags';
import searchBox from '../components/SearchBox';

export default {
  components:{
    customPosts,
    tags,
    searchBox,
  }
}
</script>