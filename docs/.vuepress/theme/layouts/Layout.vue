<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

    <div class="page-container">
      <div class="page-left-background"></div>
      <div class="sidebar-mask" @click="toggleSidebar(false)" />

      <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>

      <Home v-if="$page.frontmatter.home" />

      <Page v-else :sidebar-items="sidebarItems">
        <template #top>
          <slot name="page-top" />
        </template>
        <template #bottom>
          <slot name="page-bottom" />
        </template>
      </Page>
    </div>
    <Footer v-if="$page.frontmatter.home" />
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import { resolveSidebarItems } from "../util";
import "../../public/fonts/iconfont.css";

export default {
  name: "Layout",
  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
  },
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },
    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
  },
  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },
  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },
    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },
    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>

<style lang="stylus">
.theme-container.by-home {
  .page-container {
    background-color: transparent;
  }

  .page-left-background {
    display: none;
  }
}

.theme-container {
  background-color: #f6f6f6;

  .page-container {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    display: flex;
    background-color: #f6f6f6;

    .page-left-background {
      width: 50%;
      height: 100vh;
      position: fixed;
      background: #fff;
      left: 0;
      top: 0;
      z-index: 0;
    }
  }

  .sidebar-mask {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: none;
    background: $b64;
  }

  &.sidebar-open {
    .sidebar {
      transform: translateX(0);

      .nav-links .nav-item {
        &>a, &>.dropdown-wrapper .title {
          color: $b88;
          font-weight: 400;
          font-size: 1rem;
        }
      }
    }

    .sidebar-mask {
      display: block;
    }
  }
}

@media (max-width: $MQMobile) {
  .theme-container {
    .page-container {
      width: 100%;
      height: auto;
      display: block;

      .page-left-background {
        display: none;
      }
    }
  }
}
</style>