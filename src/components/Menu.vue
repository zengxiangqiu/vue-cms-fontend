<template>
  <div class="mh-main-nav-wrap mh-container">
    <nav class="navbar mh-main-nav mh-clearfix" role="navigation" aria-label="main navigation">
      <div>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu menu" id="navbarBasicExample">
        <div class="navbar-start">
          <template v-for="item in items">
            <div
              v-if="item.tags.length>0"
              class="navbar-item has-dropdown is-hoverable"
              :key="item.id"
            >
              <a href :class="[item.isSelect?'current-menu-item':'', 'menu-item','navbar-link' ]">{{ item.title }}</a>
              <div class="navbar-dropdown">
                <a
                  :href="'tag/'+tag.key"
                  v-for="tag in item.tags"
                  :key="tag.key"
                  class="navbar-item menu-item"
                >{{ tag.value }}</a>
              </div>
            </div>
            <a
              :class="[item.isSelect?'current-menu-item':'', 'menu-item','navbar-item' ]"
              :href="item.category"
              :key="item.id"
              v-else
            >{{ item.title }}</a>
          </template>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>

a.navbar-item{
  padding: 0.5rem 1.75rem;
}

a.navbar-item:hover {
  background: #e64946;
  color: #fff;
}

.navbar-burger {
  color: #ebebeb;
}

.navbar-menu{
  min-height: 3rem;
}

.menu-item{
  display: block;
  color: #fff;
  padding: 10px 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "首页",
          isSelect: false,
          category: "/",
          tags: []
        },
        {
          id: 2,
          title: "英美文化",
          isSelect: true,
          category: "category/culture",
          tags: [
            {
              key: "usa-culture",
              value: "美国文化"
            },
            {
              key: "uk-culture",
              value: "英国文化"
            },
            {
              key: "comics",
              value: "英语漫画"
            },
            {
              key: "the-making-of-a-nation",
              value: "美国建国史话"
            }
          ]
        },
        {
          id: 3,
          title: "英语文摘",
          isSelect: false,
          category: "category/digest",
          tags: [
            {
              key: "bilingual-reading",
              value: "双语阅读"
            },
            {
              key: "economist-official-translation-digest",
              value: "经济学人官方译文"
            }
          ]
        }
      ],
      isOpen: false
    };
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
</script>