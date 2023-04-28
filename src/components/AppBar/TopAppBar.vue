<template>
    <div ref="appbar" class="container">
        <div class="step-1">
            <div>
                <Button :icon="topLeftIcon" 
                        flat ripple appbar 
                        :options="{ weight: 700, size: '40px' }"
                        @click="$emit('topLeftButtonAction', $event)" />
            </div>

            <div v-if="$slots.title" :class="{centered}">
                <slot name="title" />
            </div>

            <div>
                <slot name="right-icons" />
            </div>
        </div>
        
        <div class="step-2">
            <div v-if="$slots['headline-medium']" class="headline medium">
                <slot name="headline-medium" />
            </div>

            <div v-else-if="$slots['headline-small']" class="headline small">
                <slot name="headline-small" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from '../Button/Button.vue';
import { useTopAppBar } from '../../composables/useAppBar';

const setTopAppBarHeight = useTopAppBar('set');

withDefaults(
    defineProps<{
        topLeftIcon: string,
        centered?: boolean
    }>(),
    {
        centered: false
    }
);
defineEmits(['topLeftButtonAction']);

const appbar = ref<HTMLElement>();

onMounted(() => {
    const observer = new MutationObserver((mutationList) => {
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                setTopAppBarHeight(`${appbar.value?.offsetHeight ?? 0}px`);
                // console.log("A child node has been added or removed.");
            } else if (mutation.type === "attributes") {
                setTopAppBarHeight(`${appbar.value?.offsetHeight ?? 0}px`);
                // console.log(`The ${mutation.attributeName} attribute was modified.`);
            }
        }
    });

    observer.observe(appbar.value as Node, { attributes: true, childList: true, subtree: true });

    return () => {
        observer.disconnect();
        setTopAppBarHeight('0px');
    }
});
</script>

<style scoped>
.container {
    background-color: var(--primary-container);
    width: 100%;
}

.step-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.step-1 > div:nth-of-type(2):not(.centered) {
    width: 100%;
}

.step-2 > .headline {
    padding-left: 16px;
    font-weight: 400;
    margin-top: 40px;
    margin-bottom: 0;
    padding-bottom: 16px;
}

.step-2 > .headline.medium {
    font-size: 28px;
}

.step-2 > .headline.small {
    font-size: 24px;
}

.step-2 > .headline.small > :deep(h1), 
.step-2 > .headline.small > :deep(h2), 
.step-2 > .headline.small > :deep(h3), 
.step-2 > .headline.small > :deep(h4), 
.step-2 > .headline.small > :deep(h5), 
.step-2 > .headline.small > :deep(h6) {
    margin-top: 0;
}

.step-2 > .headline.medium > :deep(h1), 
.step-2 > .headline.medium > :deep(h2), 
.step-2 > .headline.medium > :deep(h3), 
.step-2 > .headline.medium > :deep(h4), 
.step-2 > .headline.small > :deep(h5), 
.step-2 > .headline.medium > :deep(h6) {
    margin-top: 40px;
    margin-bottom: 0;
    padding-bottom: 16px;
}
</style>