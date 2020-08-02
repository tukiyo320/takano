<template>
  <v-layout
    column
    justify-center
    align-center
  >
      <convention-table></convention-table>
  </v-layout>
</template>

<script lang="ts">
import ConventionTable from '~/components/convention/ConventionTable.vue'
import Vue from 'vue';

export default Vue.extend({
  components: {
    ConventionTable
  },
  data() {
    return {
      header: {
        title: '『桜降る代に決闘を』イベント一覧'
      }
    }
  },
  head() {
    return {
      title: this.header.title
    }
  },
  mounted() {
    this.updateHeader()
  },
  methods: {
    updateHeader() {
      this.$nuxt.$emit('updateHeader', this.header.title)
    }
  }
})
</script>
