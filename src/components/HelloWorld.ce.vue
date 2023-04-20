
<script setup lang="ts">
import HelloWorld from './HelloWorld.vue';

defineProps<{ msg: string }>();
</script>

<template>
  <HelloWorld :msg="msg" />
</template>

<style>
  @import "dist/main.ce.css";
</style>
