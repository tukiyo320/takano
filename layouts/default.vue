<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      color="primary"
      app
      fixed
    >
      <v-toolbar-title v-text="title"/>
    </v-app-bar>
    <v-content id="page-content">
      <nuxt/>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        clipped: false,
        fixed: false,
        title: 'Takano'
      }
    }
  }
</script>

<style>
#page-content {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
