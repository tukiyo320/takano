<template>
  <v-dialog v-model="isDisplay" scrollable max-width="500px" @click:outside="isDisplay = false">
    <v-card>
      <v-card-title>このサイトについて</v-card-title>
      <v-card-text>
        <div>
          <ul>
            <li>
              ボードゲーム『桜降る代に決闘を』の公式・公認イベントリストです
            </li>
            <li>
              このサイトは公式のサポート外にあります
            </li>
            <li>
              表示内容は公式サイトのイベントと変わらず、基本的には見やすく整形しているのみとなります
            </li>
            <ul>
              <li>
                ただし、表示に差異があった場合、公式サイトの表記を正とします
              </li>
            </ul>
            <li>
              <a href="https://github.com/TukiyoIgarashi/takano" target="_blank">ソースコードを公開</a>しており、誰でも機能追加や修正ができます
            </li>
            <li>
              要望は<a href="https://github.com/TukiyoIgarashi/takano/issues" target="_blank">github issue</a>または運営twitterまで
            </li>
          </ul>
        </div>
        <div>
          運営： <a href="https://twitter.com/tukiyo320" target="_blank">@tukiyo320</a>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'AboutDialog',
    data() {
      return {
        isDisplay: false,
      }
    }
  })
</script>

<style></style>
