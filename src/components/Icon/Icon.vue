<template>
<!-- <img :src="image" :alt="name" /> -->
<span ref="iconContainer" v-html="src"></span>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const defaultFill = false;
const defaultWeight = 400;
const defaultGrade = 0;

const props = withDefaults(defineProps<{
    name: string,
    symbol?: boolean,
    type?: 'Outlined' | 'Filled' | 'Rounded' | 'Sharp' | 'Two tone',
    size?: '18px' | '20px' | '24px' | '36px' | '40px' | '48px',
    fill?: boolean,
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700,
    grade?: -25 | 0 | 200,
    color?: 'white' | 'black'
}>(), {
    symbol: true,
    type: 'Outlined',
    size: '24px',
    fill: false,
    weight: 400,
    grade: 0,
    color: 'black'
});

const iconContainer = ref<HTMLSpanElement>();

const options = computed(() => {
    if (!props.symbol) return 'v16';

    if (props.weight === defaultWeight && props.fill === defaultFill && props.grade === defaultGrade)  return 'default';

    let opt = '';
    if (props.weight) {
        opt += `wght${props.weight}`;
    }
    if (props.grade) {
        opt += `grad${props.grade}`;
    }
    if (props.fill) {
        opt += 'fill1';
    }

    return opt;
});

const image = computed(() => `https://fonts.gstatic.com/s/i${props.symbol ? '/short-term/release' : ''}/material${props.symbol ? 'symbols' : 'icons'}${props.type.replace(/ /g, '').toLowerCase()}/${props.name}/${options.value}/${props.size}.svg`);
const src = ref('');

onMounted(() => {
    fetch(image.value)
        .then(r => r.text())
        .then(svg => (src.value = svg));
});
</script>

<style scoped>
span {
    display: contents;
}
</style>
