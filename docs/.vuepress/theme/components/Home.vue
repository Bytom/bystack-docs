<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <div class="wrap">
      <header class="hero">
        <h1 v-if="data.heroText !== null" id="main-title">
          {{ data.heroText }}
        </h1>
        <p v-if="data.tagline !== null" class="description">
          {{ data.tagline }}
        </p>
      </header>
    </div>
    <UpdateLog />
    <HomeSwitch />
    <div class="wrap content">
      <Content class="theme-default-content custom" />
    </div>
  </main>
</template>

<script>
import HomeSwitch from "./HomeSwitch.vue";
import NavLink from "@theme/components/NavLink.vue";
import UpdateLog from "@theme/components/UpdateLog.vue";
export default {
  name: "Home",

  components: { NavLink, UpdateLog,HomeSwitch },
  created() {
    // console.log("created site", this.$site, this.$page);
  },
  beforeUpdate() {
    console.log("site", this.$site, this.$lang);
  },

  computed: {
    data() {
      return {
        ...this.$page.frontmatter,
        lang: this.$lang
      };
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>

<style lang="stylus">
.by-home {
  background: #fafafa url('/images/bg-hero-3200.jpg') center top / 100% no-repeat;
  height: 24.5rem;
  .home {
    width: 100%;
    .wrap {
      &>:first-child {
        width: 100%;
        max-width: 1200px;
        margin: 0px auto;
        box-sizing: border-box;
      }
    }

    .hero {
      height: 20rem;
      text-align: center;
      padding-top: 4.5rem;
      margin: 0;
      text-align: left;

      #main-title {
        max-width: 34rem;
        font-size: 3rem;
        font-weight 600
        line-height 4.5rem
        color: $w;
        margin: 0 0 0.75rem 0;
      }

      .description {
        max-width: 28rem;
        font-size: 1.375rem;
        color: $w56;
        text-align: left;
        margin: 0;
        letter-spacing: 0.2px;
      }
    }

    .featuresWrap {
      background: #FFFFFF;
    }

    .features {
      border-top: none;
      padding: 2rem 0;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: stretch;
      justify-content: space-between;

      .feature {
        text-align: center;
        padding-top: 3rem;
        flex-grow: 1;
        flex-basis: 30%;
        width: 30%;
        box-sizing: border-box;

        h2 {
          font-family: Roboto;
          font-weight: 500;
          border-bottom: none;
          padding-bottom: 0;
          margin: 1rem 0 0.25rem 0;
          font-size: 1rem;
          line-height: 1.8em;
        }

        p {
          width: 75%;
          margin: 0 auto;
          line-height: 22px;
          font-size: 0.875rem;
          color: $b24;
        }

        &:nth-child(1) {
          background: url('/images/icon/docs_feature_1.png') center top / 48px no-repeat;
        }

        &:nth-child(2) {
          background: url('/images/icon/docs_feature_2.png') center top / 48px no-repeat;
        }

        &:nth-child(3) {
          background: url('/images/icon/docs_feature_3.png') center top / 48px no-repeat;
        }
      }
    }

    .content {
      background: #FAFAFA;

      .barWrap {
        position: relative;
        padding-top: 32px;

        .bar {
          width: 100%;
          height: 45px;
          position: absolute;
          bottom: 0px;
          left: 0px;
          transform: matrix(-1, 0, 0, 1, 0, 0);
          background: linear-gradient(7deg, rgb(0, 102, 255) 16.46%, rgb(45, 199, 144) 56.83%, rgb(145, 211, 3) 94.37%), rgb(22, 22, 22);
        }

        .bar:after {
          content: ' ';
          position: absolute;
          top: 0px;
          left: 0px;
          width: 0px;
          height: 0px;
          border-top: 40px solid rgb(250, 250, 250);
          border-left: 0px solid transparent;
          border-right: 100vw solid transparent;
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .by-home {
    background: #fafafa url('/images/bg-hero-3200.jpg') center top / 1200px no-repeat;

    .home {
      padding: 0;

      .features {
        flex-direction: column;

        .feature {
          width: 100%;
          padding: 3rem 2.5rem 0 2.5rem;
          margin-bottom: 1rem;

          p {
            width: 100%;
          }
        }

        .feature:last-child {
          margin-bottom: 0;
        }
      }

      .hero {
        display: block;
        height: auto;
        padding: 4.25rem 1.5rem 5.5rem;
        box-sizing: border-box;

        h1 {
          margin: 0 0 0.75rem;
        }

        #main-title {
          width: 100%;
          font-size: 2rem;
        }
      }

      .content {
        .navs .item:last-child {
          margin-bottom: 0;
        }

        .barWrap {
          .bar {
            height: 26px;
            background: linear-gradient(7deg, rgb(0, 102, 255) 16.46%, rgb(45, 199, 144) 56.83%, rgb(145, 211, 3) 94.37%), rgb(22, 22, 22);
          }

          .bar:after {
            border-top: 16px solid rgb(250, 250, 250);
          }
        }
      }

      .footer {
        // display: none;
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .by-home {
    .home {
      .content {
        .barWrap {
          .bar {
            height: 26px;
            background: linear-gradient(7deg, rgb(0, 102, 255) 16.46%, rgb(45, 199, 144) 56.83%, rgb(145, 211, 3) 94.37%), rgb(22, 22, 22);
          }

          .bar:after {
            border-top: 16px solid rgb(250, 250, 250);
          }
        }
      }
    }
  }
}
</style>
