<template>
    <div :class="{container: true, [color]: true}">
        <div v-if="$slots.left" :class="`part part-left ${align?.left ?? ''}`">
            <slot name="left" />
        </div>
        <div v-else />

        <div v-if="$slots.center" :class="`part part-center ${align?.center ?? ''}`">
            <slot name="center" />
        </div>

        <div v-if="$slots.right" :class="`part part-right ${align?.right ?? ''}`">
            <slot name="right" />
        </div>
        <div v-else />
    </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

const $slots = useSlots();

withDefaults(defineProps<{
    align?: {
        left?: 'left' | 'center' | 'right',
        center?: 'left' | 'center' | 'right',
        right?: 'left' | 'center' | 'right',
    },
    color?: 'primary' | 'secondary' | 'ternary'
}>(), {
    color: 'primary'
});
</script>

<style scoped>
.container {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 4px;
    padding-right: 16px;
}

.container.primary {
    background-color: var(--primary-container);
    color: var(--on-primary-container);
    --color: var(--on-primary-container);
}
.container.secondary {
    background-color: var(--secondary-container);
    color: var(--on-secondary-container);
    --color: var(--on-secondary-container);
}
.container.ternary {
    background-color: var(--ternary-container);
    color: var(--on-ternary-container);
    --color: var(--on-ternary-container);
}

.container > .part {
    display: flex;
    align-items: center;
    width: 100%;
    white-space: 8px;
    height: 100%;
}

.container > .part-left {
    justify-content: flex-start;
}

.container > .part-center {
    justify-content: center;
}

.container > .part-right {
    justify-content: flex-end;
}

.container > .part-left.left {
    justify-content: flex-start;
}
.container > .part-left.center {
    justify-content: center;
}
.container > .part-left.right {
    justify-content: flex-end;
}

.container > .part-center.left {
    justify-content: flex-start;
}
.container > .part-center.center {
    justify-content: center;
}
.container > .part-center.right {
    justify-content: flex-end;
}

.container > .part-right.left {
    justify-content: flex-start;
}
.container > .part-right.center {
    justify-content: center;
}
.container > .part-right.right {
    justify-content: flex-end;
}
</style>
