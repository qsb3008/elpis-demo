<template>
  <div class="demo">
    <span>demo</span>
    <el-input v-model="val" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const val = ref('1')
</script>

<style lang="less" scoped></style>
