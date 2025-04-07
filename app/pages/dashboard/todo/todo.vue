<template>
  <div class="todo">
    {{ content }}
  </div>
</template>

<script setup>
import {  ref } from "vue";

const content = ref("=待开发=");


</script>

<style lang="less" scoped>
</style>
