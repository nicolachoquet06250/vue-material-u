<template>
    <Test v-model="value" />
</template>

<script setup lang="ts">
import Test from './Test.vue'
import { ref, watch } from 'vue';

const emit = defineEmits(['change']);

const props = defineProps<{ value: string }>();

const value = ref(props.value);

watch(value, (v) => {
    emit('change', v);
});
</script>

<style>
    @import "dist/main.ce.css";
</style>