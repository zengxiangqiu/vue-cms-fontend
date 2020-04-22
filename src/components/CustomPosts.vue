<template>
  <div class="mh-widget mh-custom-posts">
    <h4 class="mh-widget-title">
      <span class="mh-widget-title-inner">最新文章</span>
    </h4>
    <ul class="mh-custom-posts-widget mh-clearfix" v-if='entries.length>0'>
      <li v-for="(entry, index) in entries" class="mh-custom-posts-item mh-clearfix" :key="index">
        <figure class="mh-custom-posts-thumb">
          <a href>
            <img
              :src="entry.imgUrl"
              alt
              width="80"
              height="60"
            />
          </a>
        </figure>
        <div class="mh-custom-posts-header">
          <p class="mh-custom-posts-small-title">
            <a :href='entry.link'>{{ entry.title }}</a>
          </p>
          <div class="mh-meta mh-custom-posts-meta">
            <span class="mh-meta-date updated">
              <i class="fa fa-clock-o"></i>
              {{ entry.lastModDate }}
            </span>
            <span class="mh-meta-comments">
              <i class="fa fa-comment-o"></i>
              <a href>{{ entry.countOfComments }}</a>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entries: []
    };
  }
};
</script>