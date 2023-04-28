<template>
    <div :class="{page: true, mt: !!$slots['sticky-header'], mb: !!$slots['sticky-footer'], ['static-body']: !!$slots['static-body']}">
        <header ref="header" v-if="$slots['sticky-header']" class="sticky">
            <slot name="sticky-header" />
        </header>
        
        <main v-if="$slots['static-body']">
            <slot name="static-body" />
        </main>
        <slot v-else />

        <footer ref="footer" v-if="$slots['sticky-footer']" class="static">
            <slot name="sticky-footer" />
        </footer>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUpdate, onMounted, ref, useSlots } from 'vue';
import { useAppBar, useTopAppBar } from '../../composables/useAppBar';

const $slots = useSlots();
const [appBarHeight, setAppBarHeight] = useAppBar<null>();
const [topAppBarHeight, setTopAppBarHeight] = useTopAppBar<null>();

const header = ref<HTMLElement>();
const footer = ref<HTMLElement>();

const calculateHeight = () => {
    let result = 0;
    if (!!$slots['sticky-header']) {
        console.log('[header]')
        result += parseInt(topAppBarHeight.value.replace('px', ''));
    }
    if (!!$slots['sticky-footer']) {
        console.log('[footer]')
        result += parseInt(appBarHeight.value.replace('px', ''));
    }

    return `${result}px`;
};

const preCalculHeight = ref(calculateHeight());

onBeforeUpdate(() => {
    if (header.value) {
        setTopAppBarHeight(`${header.value?.offsetHeight ?? 0}px`);
    }
    if (footer.value) {
        setAppBarHeight(`${footer.value?.offsetHeight ?? 0}px`);
    }

    preCalculHeight.value = calculateHeight();
});

onMounted(() => {
    if (header.value) {
        setTopAppBarHeight(`${header.value?.offsetHeight ?? 0}px`);
    }
    if (footer.value) {
        setAppBarHeight(`${footer.value?.offsetHeight ?? 0}px`);
    }

    preCalculHeight.value = calculateHeight();
});
</script>

<style scoped>
div {
    --primary: #356919;
    --on-primary: #fefefe;

    --primary-container: #d7e4ca;
    --on-primary-container: #1c3523;

    --secondary: #394a36;
    --on-secondary: #fefefe;

    --secondary-container: #e7edde;
    --on-secondary-container: #0b2307;

    --ternary: #394a36;
    --on-ternary: #fefefe;

    --ternary-container: #a6ecec;
    --on-ternary-container: #0b2307;

    --danger: #b52e33;
    --on-danger: #ffb5ad;
    --warning: #e7a137;
    --on-warning: #e7a137;
    --success: 497337;
    --on-success: 497337;
    --info: #a6ecec;
    --on-info: #a6ecec;
}

.page {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
}

.page.mt {
    margin-top: v-bind(topAppBarHeight);
}

.page.mb {
    margin-bottom: v-bind(appBarHeight);
}

.page.static-body > main {
    height: calc(100vh - v-bind(preCalculHeight));
    width: 100%;
    overflow: auto;
}

header.sticky {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}

footer.static {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
}

@media (prefers-color-scheme: dark) {
    div {
        --primary: #9ed77e;
        --on-primary: #083500;

        --primary-container: #1a5001;
        --on-primary-container: #b9f398;

        --secondary: #beccb2;
        --on-secondary: #232c1e;

        --secondary-container: #e7edde;
        --on-secondary-container: #0b2307;

        --ternary: #a1d0d1;
        --on-ternary: #003435;

        --ternary-container: #a6ecec;
        --on-ternary-container: #0b2307;

        --danger: #ffb5ad;
        --on-danger: #690001;
        --warning: #e7a137;
        --on-warning: #e7a137;
        --success: 497337;
        --on-success: 497337;
        --info: #a6ecec;
        --on-info: #a6ecec;
    }
}
</style>

<style>
body {
  margin: 0 auto;
}

* {
    box-sizing: border-box;
}
</style>