<template>
  <v-navigation-drawer
    clipped
    permanent
    app
    :mini-variant='window.width < windowLimit'
  >
    <MainLayoutSideBarSheet :window='window' :windowLimit='windowLimit' />
    <v-divider></v-divider>

    <v-list>
      <v-list-item
        dense
        v-for='(link, idx) of links'
        :key='idx'
        :to='link.route'
        link
        :title='link.text'
      >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import MainLayoutSideBarSheet from '@/components/Mainlayout/MainLayoutSideBarSheet'
export default {
  components: {
    MainLayoutSideBarSheet,
  },

  data: () => ({
    window: {
      width: 0,
    },

    windowLimit: 800,

    links: [
      {
        icon: 'mdi-home',
        route: '/',
        text: 'Главная',
      },
      {
        icon: 'mdi-shopping',
        route: '/shop',
        text: 'Магазин',
      },
      {
        icon: 'mdi-face-agent',
        route: '',
        text: 'Услуги',
      },
      {
        icon: 'mdi-history',
        route: '',
        text: 'Заказы',
      },
      {
        icon: 'mdi-wallet',
        route: '',
        text: 'Баланс',
      },
    ],
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