<template>
    <!-- <label v-if="$slots.default">
        <slot/> :
    </label> -->
    <textarea 
        v-model="modelValue"
    ></textarea>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';

    const emit = defineEmits(['update:modelValue']);

    const props = defineProps<{ modelValue: string }>();

    const modelValue = computed({
        get: () => props.modelValue,
        set: v => {
            emit('update:modelValue', v);
            bgColor.value = v.length > 3 ? 'white' : 'red';
        }
    });

    const bgColor = ref(modelValue.value.length > 3 ? 'white' : 'red');
</script>

<style scoped>
    textarea {
        background-color: v-bind(bgColor);
    }
</style>