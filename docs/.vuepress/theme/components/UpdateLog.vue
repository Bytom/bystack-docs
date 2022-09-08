<template>
  <div class="lastUpdateWrap">
    <div class="lastUpdate">
      <span class="info">
        {{ data.lastUpdate }}
      </span>
      <span class="updateText" @click="goMore">
        {{ data.log[data.lang === "zh-CN" ? "zh" : "en"][0].text }}
      </span>
      <span class="viewMore" @click="goMore">
        {{ data.viewMore }}
      </span>
      <span class="time">{{data.log[data.lang === "zh-CN" ? "zh" : "en"][0].time}}</span>
    </div>
  </div>
</template>
<script>
import log from "../../../update.js";
export default {
  name: "UpdateLog",
  computed: {
    data() {
      return {
        ...this.$page.frontmatter,
        log,
        lang: this.$lang,
      };
    },
  },
  methods: {
    goMore(path) {
        let linkPre = this.data.lang === "zh-CN" ? "/zh" : ""
        let link = linkPre+ this.data.log?.[this.data.lang === "zh-CN" ? "zh" : "en"][0].link
        this.$router.push(link);
    },
  },
};
</script>

<style lang="stylus">
.lastUpdateWrap {
  background: #fff;
  height: 0;
  display: none;

  .lastUpdate {
    position relative;
    max-width: 1160px;
    margin: 0 auto;
    padding: 1.5rem 0;
    font-size: 0.875rem;
    top: -4.375rem;

    &>span {
      vertical-align: middle;
      line-height: 22px;
    }

    .info {
      font-weight: 500;
      color: $w56;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        background: #06BE85;
        border-radius: 50%;
        position: absolute;
        left: 5px;
        top: 5px;
      }
    }

    .updateText {
      display: inline-block;
      max-width: 67%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #fff;
      margin: 0 0 0 2rem;
      cursor pointer;
      &:hover{
        color: #004EE4;
      }
    }

    .viewMore {
      display: none;
      color: #004EE4;
      cursor: pointer;
      white-space: nowrap;
    }

    .time {
      display none;
      color: $b24;
      float: right;
    }
  }
}
@media (max-width: $MQMobile)
  .lastUpdateWrap
    .lastUpdate
      padding 1rem .125rem
      .updateText
        max-width 140px
      .time
        // display inline-block
        display none;
        width 75px
        white-space nowrap
        overflow hidden
</style>