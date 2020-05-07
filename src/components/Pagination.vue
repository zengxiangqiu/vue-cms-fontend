<template>
  <div>
    <paginate
      v-model="pagination.page"
      :page-count="pagination.pageCount"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :prev-class="'page-item'"
      :next-class="'page-item'"
    ></paginate>
  </div>
</template>

<style lang='css'>
.pagination {
  margin: 0rem;
  max-width: 40%;
}
.page-item {
  display: inline-block;
  font-weight: 700;
  color: #000;
  background: #f5f5f5;
  margin: 0.1rem 0.1rem;
}
  .page-item:hover{
    color: #fff;
    background: #e64946;
  }
@media screen and (max-width: 768px) {
  .pagination {
    flex-wrap: wrap;
    max-width: 100%;
  }
}

.active {
  background: #e64946;
}

.active a {
  color: #fff;
}
.page-item a{
  display: block;
  padding: 10px 15px;
}
.page-item a:focus {
  outline: none;
}
.page-item a:hover {
  color: #fff;
}
</style>

<script>


export default {
  props: ['pagination'],
  methods: {
    clickCallback(pageNum) {
      this.$emit('OnPage',pageNum);
    }
  },
};
</script>
