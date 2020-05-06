<template>
  <div class="mh-widget mh-custom-posts">
    <h4 class="mh-widget-title">
      <span class="mh-widget-title-inner">最新文章</span>
    </h4>
    <ul class="mh-custom-posts-widget mh-clearfix" v-if='customPosts.length>0'>
      <li v-for="(entry, index) in customPosts" class="mh-custom-posts-item mh-clearfix" :key="index">
        <figure class="mh-custom-posts-thumb">
          <router-link :to='"/"+entry.id'>
            <img
              :src="entry.imgUrl"
              alt
              width="80"
              height="60"
            />
          </router-link>
        </figure>
        <div class="mh-custom-posts-header">
          <p class="mh-custom-posts-small-title">
            <router-link :to='"/"+entry.id' :title="entry.title">{{ entry.title }}</router-link >
          </p>
          <div class="mh-meta mh-custom-posts-meta">
            <span class="mh-meta-date updated">
              <i class="fa fa-clock-o"></i>
              {{ entry.lastModDate | GetChineseFormatDate}}
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
import { mapState } from 'vuex';

export default {
  data() {
    return {
      
    };
  },
  computed:mapState(['customPosts']),
  created() {
    this.$store.dispatch('FETCH_CUSTOMPOSTS');
  },
  filters:{
    GetChineseFormatDate: function(val){
      val = new Date(val);
       return val.getFullYear() + '年' + (val.getMonth() + 1) + '月' + val.getDate() +'日'
    }
  }

};
</script>