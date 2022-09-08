<template>
  <aside class="sidebar">
    <NavLinks />

    <slot name="top" />
    <SidebarLinks
      :depth="0"
      :items="items"
    />
    <slot name="bottom" />
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items']
}
</script>

<style lang="stylus">
.sidebar
  font-size 16px
  width $sidebarWidth
  height 100vh
  min-height: 500px
  position sticky
  z-index 10
  margin 0
  top 0
  left 0
  bottom 0
  padding-top 80px
  box-sizing border-box
  border-right 1px solid #f6f6f6
  overflow-y auto
  >.title
    padding 2rem 0 .5rem 0
    margin 0 2rem .5rem 2rem
    border-bottom 1px solid #EBEBEB
    font-family Roboto
    font-weight 500
    color $b88
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1rem
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 3.5rem 0 2rem
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.5
      font-weight bold
    & > li:not(:first-child)
      // margin-top .75rem

@media (max-width $MQNarrow){
  .sidebar{
    width: $narrowSidebarWidth;
  }
}

@media (max-width: $MQMobile)
  .sidebar
    background #fff
    top 0
    padding-top $navbarHeight
    transform translateX(-100%)
    transition transform .2s ease
    position fixed
    >.title 
      display none
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0

</style>
