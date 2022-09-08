<template>
  <header :class="{ navbar: true, fixedNavbar: $page.title !== 'Home' }">
    <div class="header-container">
      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />
      <a 
        href="https://bytom.io"
        class="home-link"
      >
        <span
          v-if="$siteTitle"
          ref="siteName"
          class="site-name"
          :class="{ 'can-hide': $site.themeConfig.logo }"
          >{{ $siteTitle }}</span>
      </a>

      <div
        class="links"
        :style="
          linksWrapMaxWidth
            ? {
                'max-width': linksWrapMaxWidth + 'px',
              }
            : {}
        "
      >
        <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
        <SearchBox
          v-else-if="
            $site.themeConfig.search !== false &&
            $page.frontmatter.search !== false
          "
        />
        <NavLinks class="can-hide" />
      </div>
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from "./AlgoliaSearchBox";
import SearchBox from "./SearchBox";
import SidebarButton from "./SidebarButton.vue";
import NavLinks from "./NavLinks.vue";

export default {
  name: "Navbar",

  components: {
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox,
  },

  data() {
    return {
      linksWrapMaxWidth: null,
    };
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    },
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, "paddingLeft")) +
      parseInt(css(this.$el, "paddingRight"));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener("resize", handleLinksWrapWidth, false);
  },
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 1.5rem;
$navbar-height = 80px;

.header-container{
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  @media (max-width: $MQMobile) {
    width: 100%;
  }
}

.navbar {
  height: $navbar-height;
  background: #000;
  border: none;
  position: relative;
  box-sizing border-box
  z-index 99
  a, span, img {
    display: inline-block;
  }
  .logo {
    height: $navbarHeight - 1.4rem;
    min-width: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    vertical-align: top;
  }

  .home-link {
    background: url('/images/logo_light.png') 0 0 / 130px no-repeat;
    margin: 24px 0 0 0;
    .site-name {
      display: inline-block;
      width: 136px;
      height: 48px;
      font-size: 1.3rem;
      font-weight: 600;
      color: $b64;
      position: relative;
      visibility: hidden;
    }
  }

  .develop {
    height: 100%;
    width: 120px;
    position: absolute;
    left: 142px;
    top: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-weight: 500;
    font-size: 1.5rem;
    color: #ffffff;
  }

  .links {
    height: $navbar-height;
    padding-left: 1.5rem;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.875rem;
    position: absolute;
    right: $navbar-horizontal-padding;
    display: flex;
    top: 0;
    background-color: transparent;
    align-items: center;

    .search-box input {
      display: flex;
      flex: 0 0 auto;
      vertical-align: top;
      background: transparent url('/images/search.svg') 0.6rem 0.26rem no-repeat;
      border: 1px solid rgba(255, 255, 255, 0.56);
      padding: 0 0.5rem 0 2.5rem;
      color: #fff;
      align-items: center;
    }

    .nav-item, .dropdown-title {
      color: rgba(255, 255, 255, 0.9);
      font-size: 16px;
    }

    .nav-links .nav-link{
      color: rgba(255, 255, 255, 0.9);
      font-size: 16px;
    }
    .nav-links a:hover, .nav-links a.router-link-active {
      color: rgba(255, 255, 255, 0.72);
    }

    .nav-item > a:not(.external):hover, .nav-item > a:not(.external).router-link-active {
      border-bottom-color: rgba(255, 255, 255, 0.72);
    }

    .nav-dropdown {
      background: #000;
    }
  }
}

.fixedNavbar {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  background: #1A1A1A;
}

@media (max-width: $MQMobile) {
  .header-container{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .navbar {
    background: #1a1a1a;
    height 60px
    .home-link{
      background: url(/images/logo_light.png) 16px 0 / 100px no-repeat;
    }
    .develop {
      width: 100%;
      left: 0;
    }

    .links {
      display: none;
    }
  }
}
</style>
