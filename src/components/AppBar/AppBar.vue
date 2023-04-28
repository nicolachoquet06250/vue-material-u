<template>
    <div :class="{container: true, [color]: true}" ref="appbar">
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
import { onMounted, ref, useSlots } from 'vue';
import { useAppBar } from '../../composables/useAppBar';

const $slots = useSlots();
const setAppBarHeight = useAppBar('set');

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

const appbar = ref<HTMLElement>();

onMounted(() => {
    const observer = new MutationObserver((mutationList) => {
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                setAppBarHeight(`${appbar.value?.offsetHeight ?? 0}px`);
                // console.log("A child node has been added or removed.");
            } else if (mutation.type === "attributes") {
                setAppBarHeight(`${appbar.value?.offsetHeight ?? 0}px`);
                // console.log(`The ${mutation.attributeName} attribute was modified.`);
            }
        }
    });

    observer.observe(appbar.value as Node, { attributes: true, childList: true, subtree: true });

    return () => {
        observer.disconnect();
        setAppBarHeight('0px');
    }
});
</script>

<style scoped>
.container {
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
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
    white-space: break-spaces;
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
