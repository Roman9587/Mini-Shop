<template>
  <v-navigation-drawer
    clipped
    permanent
    app
    :mini-variant='window.width < windowLimit'
  >
    <MainLayoutSideBarSheet :window='window' :windowLimit='windowLimit' />
    <v-divider></v-divider>
    <MainLayoutSideBarNav />
  </v-navigation-drawer>
</template>

<script>
import MainLayoutSideBarSheet from '@/components/MainLayout/MainLayoutSideBarSheet'
import MainLayoutSideBarNav from '@/components/MainLayout/MainLayoutSideBarNav'

export default {
  components: {
    MainLayoutSideBarSheet,
    MainLayoutSideBarNav,
  },

  data: () => ({
    window: {
      width: 0,
    },

    windowLimit: 800,
  }),

  methods: {
    resizeHandler() {
      this.window.width = window.innerWidth
    },
  },

  created() {
    window.addEventListener('resize', this.resizeHandler)
  },

  destroyed() {
    window.removeEventListener('resize', this.resizeHandler)
  },
}
</script>