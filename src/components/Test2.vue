<template>
    <textarea 
        v-model="modelValue"
    ></textarea>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    const emit = defineEmits(['update:modelValue']);

    const props = defineProps<{ modelValue: string }>();

    const modelValue = computed({
        get: () => props.modelValue,
        set: v => emit('update:modelValue', v)
    });

    const bgColor = computed(() => modelValue.value.length > 3 ? 'white' : 'red');
</script>

<style scoped>
    textarea {
        background-color: v-bind(bgColor);
    }
</style>