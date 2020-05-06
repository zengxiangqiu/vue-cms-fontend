<template>
  <div class="mh-widget widget_search">
    <h4 class="mh-widget-title" v-if="showHeader">
      <span class="mh-widget-title-inner">站内搜索</span>
    </h4>
    <form action='/' class="search-form">
      <label>
        <span class="search-reader-text">搜索：</span>
        <input type="search" name="s" placeholder="搜索..." class="search-field"/>
      </label>
      <input type="submit" class="search-submit" value="搜索" />
    </form>
  </div>
</template>

<script>
export default {
  props:{
    showHeader:{
      type:Boolean,
      default: false
    }
  }
}
</script>

