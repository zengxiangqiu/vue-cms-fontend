<template>
  <nav class="mh-post-nav mh-row mh-clearfix">
    <div class="mh-col-1-2 mh-post-nav-item mh-post-nav-prev">
      <router-link :to='"/"+previous.id'>
        <img :src="previous.imgUrl" alt width="80" height="60" />
        <span>Previous</span>
        <p>{{ previous.title }}</p>
      </router-link>
    </div>
    <div class="mh-col-1-2 mh-post-nav-item mh-post-nav-next">
      <router-link :to='"/"+next.id'>
        <img :src="next.imgUrl" alt width="80" height="60" />
        <span>Next</span>
        <p>{{ next.title }}</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {

props: {
    previous: {},
    next: {}
  }
};
</script>