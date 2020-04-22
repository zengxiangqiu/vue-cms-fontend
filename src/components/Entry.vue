<template>
  <div id="main-content" class="mh-loop mh-content">
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
            <a href>{{ entry.category }}</a>
          </span>
          <span class="entry-meta-comments">
            <i class="fa fa-comment-o"></i>
            <a href>{{ entry.countOfComments }}</a>
          </span>
        </p>
      </header>
      <div class="entry-content mh-clearfix" :inner-html.prop='entry.content | Markdown2Html'>
        
      </div>
      <EntryTag :tags='tags' />
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
    <EntryNav/>
  </div>
</template>

<script>
import EntryNav from './EntryNav.vue'
import EntryTag from './Tag'
import axios from "axios";
import MarkdownIt from 'markdown-it';

let md = new MarkdownIt();

export default {
  components:{
    EntryNav,
    EntryTag
  },
  props: {
    entry:{
      title: '',
      author:'',
      lastModDate:'',
      countOfComments:'',
      category:'',
      content:'',
    },
  },
  data() {
    return {
      tags:[]  
    }
  },
  mounted(){
    var id = this.$route.params.id;
    axios.get(`http://localhost:3000/api/entrys/${id}`).then((response)=>{
      this.entry = response.data.data;
      this.tags=  this.entry.t.map(tag=>{
        return Object.assign({},{key: tag.EntryCategoryMaster.key, value: tag.EntryCategoryMaster.value})
      });
      console.log(this.tags);
    });
  },
  filters:{
    Markdown2Html: function(val){
      // eslint-disable-next-line no-debugger
      debugger;
      return  md.render(val);
    }
  }


}
</script>