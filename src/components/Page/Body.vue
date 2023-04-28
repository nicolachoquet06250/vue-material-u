<template>
    <div :class="$style.container">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { useAppBar, useTopAppBar } from '../../composables/useAppBar';

const appBarHeight = useAppBar('get');
const topAppBarHeight = useTopAppBar('get');
</script>

<style module>
.container {
  position: relative; 
  min-height: calc(100vh - v-bind(appBarHeight) - v-bind(topAppBarHeight));
  overflow: auto;
  width: 100%;
  flex: 1;
}
</style>