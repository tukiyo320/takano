<template>
  <v-container fluid>
    <p>
      <v-text-field
        hide-details
        label="絞り込み"
        prepend-icon="mdi-magnify"
        single-line
        v-model="search"
      ></v-text-field>
    </p>
    <v-data-table
      :disable-pagination="true"
      :headers="headers"
      :items="conventions"
      :loading="isLoading"
      :search="search"
      hide-default-footer
      item-key="id"
      loading-text="読込中..."
      multi-sort
      no-data-text="イベントがありません"
      no-results-text="該当するイベントがありません"
    >
      <template v-slot:item.created_at="data">
        {{ data.value ? $dateFns.format(data.value, 'yyyy-MM-dd') : '' }}
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'ConventionTable',
    data() {
      return {
        conventions: Array<Convention>(),
        search: '',
        isLoading: false,
        headers: [
          {
            text: '形態',
            value: 'type',
            sortable: true,
            width: '7%'
          },
          {
            value: 'title',
            text: 'イベント名'
          },
          {
            value: 'tags',
            text: 'イベントタグ'
          },
          {
            value: 'capacity',
            text: '定員',
            width: '7%'
          },
          {
            value: 'hold_date',
            text: '開催日',
            sortable: true,
            width: '10%'
          },
          {
            value: 'area',
            text: '地域',
            width: '10%'
          }
        ]
      }
    },
    created() {
      if (this.conventions.length !== 0) return
      this.isLoading = true

      this.$repositories.conventions
        .getList()
        .then((it) => {
          this.conventions = it
        })
        .catch((e) => {
          this.conventions = []
          console.log(e)
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  })
</script>

<style scoped></style>
