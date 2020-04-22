<template>
  <div id="main-content" class="mh-loop mh-content">
    <article class="mh-loop-item" v-for="entry in entries" :key="entry.id">
      <figure class="mh-loop-thumb">
        <a :href="'/'+entry.id" target="_blank" rel="noopener noreferrer">
          <img :src="entry.imgUrl" alt width="326" height="245" />
        </a>
      </figure>
      <div class="mh-loop-content mh-clearfix">
        <header class="mh-loop-header">
          <h3 class="mh-loop-title">
            <a :href="'/'+entry.id">{{entry.title}}</a>
          </h3>
          <div class="mh-meta mh-loop-meta">
            <span class="mh-meta-date updated">
              <i class="fa fa-clock-o">{{entry.lastModDate | GetChineseFormatDate}}</i>
            </span>
            <span class="mh-meta-author author vcard">
              <i class="fa fa-user"></i>
              <a href="http://" target="_blank" rel="noopener noreferrer">{{entry.author}}</a>
            </span>
            <span class="mh-meta-comments">
              <i class="fa fa-comment-o"></i>
              <a href="http://" target="_blank" rel="noopener noreferrer">{{entry.countOfComments}}</a>
            </span>
          </div>
        </header>
        <div class="mh-loop-excerpt">
          <div class="mh-excerpt">
            <p>{{entry.excerpt}}</p>
          </div>
        </div>
      </div>
    </article>
    <div>
      <pagination :pagination='pagination' v-on:OnPage="OnPage"/>
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import axios from "axios";
import { mapState } from "vuex"


let entrysTmp = Array(10).fill({
  id: 1,
  category: "好书推荐",
  title: "这不是爱，这是情感操纵",
  lastModDate: "2020年2月16日",
  author: "admin",
  countOfComments: 0,
  excerpt: "北大女生包丽自杀事件让 gaslighting 这个词重新回归大众视野。",
  imgUrl:
    "https://cdn.tianfateng.cn/wp-content/uploads/2020/02/31562-52-326x245.jpg",
  link: "/1"
});
export default {
  data() {
    return {
      entries: entrysTmp,
      pagination: {
        page: 1,
        pageCount: 10,
        perPage:10,
      }

    };
  },
  components: {
    Pagination
  },
  computed:mapState(["entries", "pagination"]),
  props: {
  },  
  methods: {
    OnPage(pageNum){
      if(pageNum==1)
      {
        this.$router.push({path:`/`});
      }
      else
      {
        this.$router.push({path:`/page/${pageNum}`});
      }
      this.loadData();
      window.scrollTo(0, 0);
    },
    loadData(){
        axios.get("http://localhost:3000/api/entrys",{params: { perPage:this.pagination.perPage, page: this.pagination.page}}).then((response)=>{
              this.pagination = response.data.pagination;
              this.entrys = response.data.data;
            });
    }

  },
  filters:{
    GetChineseFormatDate: function(val){
      val = new Date(val);
       return val.getFullYear() + '年' + (val.getMonth() + 1) + '月' + val.getDate() +'日'
    }
  },
  mounted() {
    var customPage =  this.$route.params.page??'1';
    this.pagination.page = parseInt(customPage);
    this.loadData();
  },
  watch: {
    // 'pagination.page' : {
    //   // eslint-disable-next-line no-unused-vars
    //   handler: function (val, oldVal) {
    //     console.log(val);
    //     axios.get("http://localhost:3000/api/entrys",{params: { perPage:this.perPage, page: val}}).then((response)=>{
    //       this.pagination.pageCount = response.data.pagination.pageCount;
    //       this.entrys = response.data.data;
    //     });
    //   },
    // }
  },
};
</script>