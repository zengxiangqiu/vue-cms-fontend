<template>
  <div id="main-content" class="mh-loop mh-content">
    <!-- <transition name="fade">
      <div v-if="visiable"> -->
      <header class="page-header" v-if="header!=''">
        <h1 class="page-title">{{ header }}</h1>
      </header>
        <article class="mh-loop-item" v-for="entry in entries" :key="entry.id">
          <figure class="mh-loop-thumb">
            <!-- <a :href="'/'+entry.id" target="_blank" rel="noopener noreferrer">
            <img v-lazy="entry.imgUrl" alt width="326" height="245" />
            </a>-->
            <router-link :to="'/'+entry.id">
              <img v-lazy="entry.imgUrl" alt width="326" height="245" />
            </router-link>
          </figure>
          <div class="mh-loop-content mh-clearfix">
            <header class="mh-loop-header">
              <h3 class="mh-loop-title">
                <router-link :to="'/'+entry.id">{{entry.title}}</router-link>
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
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{{entry.countOfComments}}</a>
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
      <!-- </div>
    </transition> -->

    <div>
      <pagination :pagination="pagination" v-on:OnPage="OnPage" v-if="entries.length>0" />
    </div>
  </div>
</template>


<script>
import Pagination from "./Pagination.vue";
import { mapState } from "vuex";
import qs from "qs";

export default {
  data() {
    return {
      testDate: "2020-01-01"
    };
  },
  components: {
    Pagination
  },
  computed: mapState(["entries", "pagination", "header", "visiable"]),
  methods: {
    OnPage(pageNum) {
      if (pageNum == 1) {
        this.$router.push({
          path: this.$route.path.replace(/\/page\/\d*/g, "/")
        });
      } else {
        // eslint-disable-next-line no-unused-vars
        var patt = /\/page\/\d*/g;
        var path = "";
        if (patt.test(this.$route.path)) {
          path = this.$route.path.replace(/\/page\/\d*/g, "/page/" + pageNum);
        } else {
          path = this.$route.path.replace(/\/$/g, "") + "/page/" + pageNum;
        }
        if (this.$route.query != null) {
          path = path + "?" + qs.stringify(this.$route.query);
        }
        this.$router.push({ path: path });
      }
      this.$store.dispatch("FETCH_ARTICLES", {
        perPage: this.pagination.perPage,
        page: this.$route.params.page,
        tag: this.$route.params.tag,
        category: this.$route.params.category,
        s: this.$route.query.s
      });
      window.scrollTo(0, 0);
    }
  },
  filters: {
    GetChineseFormatDate: function(val) {
      val = new Date(val);
      return (
        val.getFullYear() +
        "年" +
        (val.getMonth() + 1) +
        "月" +
        val.getDate() +
        "日"
      );
    }
  },
  mounted() {
    this.$store.dispatch("FETCH_ARTICLES", {
      perPage: this.pagination.perPage,
      page: this.$route.params.page,
      tag: this.$route.params.tag,
      category: this.$route.params.category,
      s: this.$route.query.s
    });
  }
};
</script>