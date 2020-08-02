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
      single-expand
      show-expand
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
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length" class="py-2">
          <span class="font-weight-bold">会場：</span>{{ item.site }}（{{ item.site_address }}）<br>
          <span class="font-weight-bold">会費：</span>{{ item.fee }}円<br>
          <span class="font-weight-bold">開始時間：</span>{{ item.start_at }}<br>
          <span class="font-weight-bold">当日受付：</span>{{ item.a_day_entry }}<br>
          <span class="font-weight-bold">予約方法：</span><br>
          <div v-html="autoLink(sanitize(item.reserve_description))" style="white-space:pre-wrap; word-wrap:break-word;"></div>
          <span class="font-weight-bold">コメント：</span><br>
          <div v-html="autoLink(sanitize(item.comment))" style="white-space:pre-wrap; word-wrap:break-word;"></div>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import sanitizeHtml from 'sanitize-html'

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
          },
          {
            value: 'data-table-expand',
            text: ''
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
    },
    methods: {
      sanitize(text: string): string {
        return sanitizeHtml(text)
      },
      autoLink(str: string): string {
        const regexp_url = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g;
        const regexpMakeLink = function (url: string) {
          return '<a href="' + url + '" target="_blank">' + url + '</a>';
        };

        return str.replace(regexp_url, regexpMakeLink);
      }
    }
  })
</script>

<style scoped></style>
