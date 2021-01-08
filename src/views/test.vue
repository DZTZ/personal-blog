<template>
  <v-card>
    <v-tabs >
      <v-tab>日记</v-tab>
      <v-tab >笔记</v-tab>
      <v-tab>作品</v-tab>

      <v-tab-item>11111</v-tab-item>
      <v-tab-item>2222</v-tab-item>
      <v-tab-item>9999</v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
name: "test",
  methods: {
    onChange(e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
/deep/ .v-tabs-slider-wrapper{
  /*width: 30px!important;*/
  /*left: 50%!important;*/
}
.aaa{
  color: #8d29ff;
}
</style>