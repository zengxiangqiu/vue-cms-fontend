<template>
  <div class="entry-tags mh-clearfix">
    <i class="fa fa-tag"></i>
    <ul>
      <li v-for="(tag, index) in tags" :key='index'><router-link :to="tag.link">{{ tag.title }}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['tags']
}
</script>