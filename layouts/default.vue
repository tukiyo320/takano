<template>
  <v-app>
    <v-navigation-drawer v-model="isDrawerOpen" app temporary>
      <v-list dense nav class="py-0">
        <v-subheader>メニュー</v-subheader>
        <v-list-item @click="$refs.aboutDialog.isDisplay = true">
          <v-list-item-content>
            <v-list-item-title>このサイトについて</v-list-item-title>
            <about-dialog ref="aboutDialog"></about-dialog>
          </v-list-item-content>
        </v-list-item>
        <v-subheader>リンク</v-subheader>
        <v-list-item v-for="link in links" :key="link.title" :href="link.href" target="_blank">
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item-content>
          <v-list-item class="body-2">
            &copy; {{ new Date().getFullYear() }} TukiyoIgarashi
          </v-list-item>
        </v-list-item-content>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      color="primary"
      app
      fixed
    >
      <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
      <v-toolbar-title v-text="title"/>
    </v-app-bar>
    <v-content id="page-content">
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import AboutDialog from '~/components/AboutDialog.vue'

  export default Vue.extend({
    components: {
      AboutDialog
    },
    data() {
      return {
        clipped: false,
        fixed: false,
        title: 'Takano',
        isDrawerOpen: false,
        isAboutOpen: false,
        links: [
          {
            title: '新幕・桜降る代に決闘を公式',
            href: 'https://main-bakafire.ssl-lolipop.jp/furuyoni/na/index.html'
          },
          {
            title: 'このサイトのソースコード',
            href: 'https://github.com/TukiyoIgarashi/takano'
          }
        ]
      }
    },
    created() {
      this.setListener()
    },
    methods: {
      setListener() {
        this.$nuxt.$on('updateHeader', this.setHeader)
      },
      setHeader(title: string) {
        this.title = title || ''
      }
    }
  })
</script>

<style>
#page-content {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
