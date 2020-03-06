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
  }
})
</script>
