<template>
  <div class="footer">
    <div class="footerNav">
      <div class="navWrap" v-if="data.footer && data.footer.links">
        <div class="list" :key="key" v-for="(item, key) in data.footer.links">
          <h2>{{ item.title }}</h2>
          <ul>
            <li :key="sindex" v-for="(sitem, sindex) in item.list">
              <span v-if="sitem.disable">{{ sitem.title }}</span>
              <a
                target="_blank"
                v-if="!sitem.disable"
                :href="sitem.href || '/'"
                rel="noreferrer"
              >
                {{ sitem.title }}
              </a>
            </li>
          </ul>
        </div>

        <div class="list" v-if="data.footer && data.footer.contact">
          <h2>{{ data.footer.contact.contact }}</h2>
          <ul>
            <li>
              <a
                target="_blank"
                :href="'mailto:contact@bytom.io' || '/'"
                rel="noreferrer"
              >
                E-Mail: contact@bytom.io
              </a>
            </li>
            <li>
              <a
                target="_blank"
                :href="'https://bytom.io' || '/'"
                rel="noreferrer"
              >
                {{ data.footer.contact.website }}: bytom.io
              </a>
            </li>
            <li class="follows">
              <ul class="followsList">
                <li>
                  <a
                    target="_blank"
                    href="https://twitter.com/Bytom_Official"
                    rel="noreferrer"
                    ><i class="iconfont twitter"></i
                  ></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://weibo.com/u/5966947038?refer_flag=1001030101_"
                    rel="noreferrer"
                    ><i class="iconfont weibo"></i
                  ></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.chainnode.com/forum/143"
                    rel="noreferrer"
                    ><i class="iconfont chainnode"></i
                  ></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/bytomofficial/"
                    rel="noreferrer"
                    ><i class="iconfont facebook"></i
                  ></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://discord.gg/U3RSYr5"
                    rel="noreferrer"
                    ><i class="iconfont discord"></i
                  ></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://t.me/BytomInternational"
                    rel="noreferrer"
                    ><i class="iconfont telegram"></i
                  ></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="data.footer && data.footer.copyRight" class="copyRight">
      {{ data.footer.copyRight }}
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  },
};
</script>

<style lang="stylus">
.footer {
  background-color: #000;

  .footerNav {
    width: 100%;
    height: 260px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(172, 172, 176, 0.24);
    background: #000;

    .navWrap {
      width: 1280px;
      height: 100px;
      margin: 0 auto;
      display: flex;
      padding: 60px 0;

      .list {
        width: 25%;

        h2 {
          color: rgba(255, 255, 255, 0.95);
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 30px;
        }

        &:first-child {
          li:last-child a {
            border: 1px solid rgba(255, 255, 255, 0.64);
            border-radius: 4px;
            padding: 6px 8px;
          }
        }
        ul{
          margin: 0;
          padding: 0;
        }

        &>ul li {
          font-size: 14px;
          margin: 16px 0;

          a {
            color: rgba(255, 255, 255, 0.64);
          }

          &.follows {
            margin: 0;

            .followsList {
              display: flex;
              justify-content: space-between;

              li {
                float: left;

                i {
                  font-size: 23px;
                  color: #666;

                  @media (max-width: 640px) {
                    color: rgba(255, 255, 255, 0.65);
                  }
                }
              }
            }

            li {
              margin: 0;
            }
          }
        }
      }
    }
  }

  .copyRight {
    color: rgb(102, 102, 102);
    font-size: 12px;
    background-color: #000;
    border-top: 1px solid rgba(172, 172, 176, 0.24);
    text-align: center;
    line-height: 55px;
    height: 55px;
    font-weight: 400;
    letter-spacing: 0.5px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }
}
</style>