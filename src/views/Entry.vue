<template>
  <div id="main-content" style="min-height:757px" class="mh-loop mh-content">
    <article>
      <header class="entry-header mh-clearfix">
        <h2 class="entry-title">{{ entry.title }}</h2>
        <p class="mh-meta entry-meta">
          <span class="entry-meta-date updated">
            <i class="fa fa-clock-o"></i>
            <a href>{{ entry.lastModDate }}</a>
          </span>
          <span class="entry-meta-author author vcard">
            <i class="fa fa-user"></i>
            <a href>{{ entry.author }}</a>
          </span>
          <span class="entry-meta-categories">
            <i class="fa fa-folder-open-o"></i>
            <a :href="/category/+category.key">{{ category.value }}</a>
          </span>
          <span class="entry-meta-comments">
            <i class="fa fa-comment-o"></i>
            <a href>{{ entry.countOfComments }}</a>
          </span>
        </p>
      </header>
      <div class="entry-content mh-clearfix" v-html="entry.content"></div>
      <EntryTag :tags="tags" />
      <div class="mh-widget">
        <div class="textwidget custom-html-widget">
          <h2>
            <a href>
              <span>赏</span>
            </a>
          </h2>
        </div>
      </div>
    </article>
    <EntryNav :previous="previous" :next="next" v-if="previous!=null && next!=null" />
  </div>
</template>

<script>
import EntryNav from "../components/EntryNav";
import EntryTag from "../components/Tag";
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';
var md = require("markdown-it")({
  highlight: function(str, lang){
    if(lang && hljs.getLanguage(lang)){
      try{
        return hljs.highlight(lang, str).value;
      }
      // eslint-disable-next-line no-empty
      catch(__){
        
      }
      return '';
    }
  }
})

import ins from 'markdown-it-ins'
import { mapState } from "vuex";


md.use(ins);

export default {
  components: {
    EntryNav,
    EntryTag
  },
  props: {},
  data() {
    return {
      tags: [],
      previous: {},
      next: {},
      category: {}
    };
  },
  computed: mapState(["entry"]),

  watch: {
    // eslint-disable-next-line no-unused-vars
    entry: function(val, oldVal) {
      if (val.NoFound == true) {
        this.$router.push("/");
      }
      this.tags = val.tags;
      this.previous = val.previous;
      this.next = val.next;
      this.categovalry = val.category;
      val.content = this.Markdown2Html(val.content);
    }
  },
  created() {
    var id = this.$route.params.id;
    this.$store.dispatch("FETCH_ARTICLE", id);
  },
  methods: {
    Markdown2Html: function(val) {
      return md.render(val);
    }
  }
};
</script>