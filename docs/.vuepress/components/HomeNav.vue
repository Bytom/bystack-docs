<template>
  <div class="navs">
    <div v-for="(item, key) in list[$lang]" class="itemWrap">
      <div class="item">
        <img class="item-img" :src="$withBase(listImgs[key])" >
        <h2>{{ item.title }}</h2>
        <ul>
          <li v-for="(link, linkKey) in item.children.slice(0, maxLen)">
            <a v-bind:href="link.link">{{ link.title }}</a>
          </li>
          <li v-if="item.children.length > maxLen" class="viewMore">
            <a v-bind:href="item.children[0].link">View More</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import categories from "../nav/categories";

export default {
  data() {
    return {
      list: categories,
      listImgs: ['/images/nav/0.png', '/images/nav/1.png', '/images/nav/2.png', '/images/nav/3.png', '/images/nav/4.png', '/images/nav/5.png', '/images/nav/6.png', '/images/nav/7.png', '/images/nav/1.png', '/images/nav/1.png'],
      maxLen: 5,
    };
  },
  beforeMount() {
    // console.log(this.$site, categories[this.$lang])
  },
  mounted: function () {},
};
</script>

<style lang="stylus">
.navs {
  width: 100%;
  display: flex;
  font-size: 32px;
  flex-wrap: wrap;
  padding: 3rem 0;

  .itemWrap {
    width: 33.3333%;
    margin-bottom: 1rem;
  }

  .item {
    height: 456px;
    margin: 0 .5rem;
    background: #ffffff;
    padding: 2rem;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid rgba(234, 235, 237, 0.8);
    box-shadow: 0px 4px 2px -2px rgba(78, 115, 248, 0.02);
    .item-img{
      width: 100px;
      height: 100px;
    }
    h2 {
      font-size: 1.5rem;
      color: $b88;
      line-height: 2rem;
      margin: 1rem 0;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 1rem 0 0 0;

      li {
        font-size: 1.125rem;
        line-height: 2rem;
        margin-bottom: 0.32rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        a {
          font-family: Roboto;
          font-weight: 400;
          color: $b64

          &:hover {
            color: $activeLink;
          }
        }
      }

      .viewMore {
      }

      li:last-child {
        margin: 0;
      }
    }
  }
  .item:nth-child(3n+2)  {
    margin: 0 1rem;
  }

  .item:hover {
    border: 1px solid #EBEBEB;
  }
}

@media (max-width: $MQMobile) {
  .navs {
    flex-direction: column;
    padding: 1rem;
    box-sizing: border-box;

    .itemWrap {
      width: 100%;
      .item {
        border-radius: 0.5rem;
        margin: 0 0 1rem 0;
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    // background-color: #fff;
    box-sizing: border-box;
  }

  .item {
    width: 100%;
  }
}
</style>
