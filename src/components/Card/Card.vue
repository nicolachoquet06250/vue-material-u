<template>
    <section class="container card primary">
        <header>
            <section>
                <img v-if="avatar" class="avatar" :src="avatar" :alt="`avatar ${avatar}`" />

                <div>
                    <h1 v-if="$slots.header">
                        <slot name="header" />
                    </h1>

                    <h2 v-if="$slots['sub-head']">
                        <slot name="sub-head" />
                    </h2>
                </div>
            </section>

            <div v-if="body && !$slots.title && !$slots['sub-title'] && !$slots.default" class="body-img">
                <img :src="body" />
            </div>

            <section v-else>
                <Button icon="more_vert" circle flat />
            </section>
        </header>

        <main v-if="body && ($slots.title || $slots['sub-title'] || $slots.default)">
            <div v-if="body && ($slots.title || $slots['sub-title'] || $slots.default)" class="body-img">
                <img :src="body" />
            </div>

            <section class="body" v-if="$slots.title || $slots['sub-title'] || $slots.default">
                <h3 v-if="$slots.title">
                    <slot name="title" />
                </h3>

                <h4 v-if="$slots['sub-title']">
                    <slot name="sub-title" />
                </h4>

                <div v-if="$slots.default">
                    <slot />
                </div>
            </section>

            <section v-if="$slots.actions" class="actions">
                <slot name="actions" />
            </section>
        </main>
    </section>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import Button from '../Button/Button.vue';

withDefaults(defineProps<{
    avatar?: string,
    body?: string
}>(), {});

const $slots = useSlots();
</script>

<style scoped>
section.card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    min-height: 80px;
    /* height: calc(100vh - 100px); */
    width: 100%;

    border-radius: 12px;
    
    max-width: 500px;

    margin: 5px;
}

section.card:not(:has(> main)),
section.card > header:not(:has(+ main)) {
    max-height: 80px;
}

section.card > header {
    /* height: 72px; */
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

section.card > header > section > .avatar {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-left: 16px;
}

section.card > header > section > div {
    margin-left: 16px;
}

section.card > header :deep(h1),
section.card > header :deep(h2) {
    margin: 0;
}

section.card > header :deep(h1) {
    font-size: 16px;
}

section.card > header :deep(h2) {
    font-size: 14px;
}

section.card > header > section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

section.card > header > div.body-img {
    overflow-x: hidden;
    height: auto;
    width: 80px;
    max-height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
}

section.card > header > div.body-img > img {
    height: 100%;
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

section.card > main {
    width: 100%;
    height: 100%;
}

section.card > main > div.body-img {
    overflow-y: hidden;
    height: auto;
    width: 100%;
    max-height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

section.card > main > div.body-img > img {
    width: 100%;
}

section.card > main > section:first-of-type {
    padding: 16px;
}

section.card > main > section:first-of-type > * {
    font-size: 14px;
}

section.card > main > section:first-of-type :deep(h3),
section.card > main > section:first-of-type :deep(h4) {
    margin: 0;
}

section.card > main > section:first-of-type :deep(h3) {
    font-size: 16px;
}

section.card > main > section:first-of-type :deep(h3 + h4) {
    margin-bottom: 32px;
}

section.card > main > section:first-of-type :deep(h3:not(:has(+ h4))) {
    margin-bottom: 32px;
}

section.card > main > section.actions {
    padding: 16px;
}
</style>