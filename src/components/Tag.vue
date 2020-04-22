<template>
  <div class="entry-tags mh-clearfix">

    <i class="fa fa-tag"></i>
    <ul>
      <li v-for="tag in tags" :key="tag.value"><a :href="'tag/'+tag.key">{{ tag.value }}</a></li>
    </ul>
  </div>
</template>


<script>
export default {
  props:{
    tags: []
  }
}
</script>