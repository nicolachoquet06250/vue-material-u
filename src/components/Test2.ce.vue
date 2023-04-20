<template>
    <textarea 
        v-model="value"
    ></textarea>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';

const emit = defineEmits(['change']);

const props = defineProps<{ value: string }>();

const value = computed({
    get: () => props.value,
    set: v => emit('change', v)
});

const bgColor = computed(() => value.value.length > 3 ? 'white' : 'red');

onMounted(() => {
    console.log(bgColor.value)
})

watch(bgColor, () => {
    console.log(bgColor.value)
})
</script>

<style>
    textarea {
        background-color: v-bind(bgColor);
    }
</style>