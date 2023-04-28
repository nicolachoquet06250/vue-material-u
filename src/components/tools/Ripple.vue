<template>
    <div v-if="!disabled && ripple.show"
        :class="{
            [$style.ripple]: true
        }"
        @mouseup="createRipple">
        <div v-if="ripple.show" :class="{
            [$style['ripple-active']]: ripple.show,
            [$style['ripple-active-transition']]: transition
        }" @transitionend="handleAnimationEnd" />
    </div>
</template>

<script setup lang="ts">
import { ComponentInternalInstance, reactive, ref, watch } from 'vue';

withDefaults(defineProps<{
    disabled?: boolean,
    parentElement: ComponentInternalInstance | null
}>(), {
    disabled: false
});
const emit = defineEmits(['click']);

const ripple = reactive({
    size: '0px',
    left: '0px',
    top: '0px',
    show: false,
});
const transition = ref(false);

watch(() => ripple.show, (s) => {
    if (s) {
        setTimeout(() => {
            transition.value = true;
        }, .1);
    } else {
        transition.value = false;
    }
});

const createRipple = (event: MouseEvent) => {
  // @ts-ignore
  const { currentTarget, layerX: x, layerY: y } = event;
  const element = currentTarget as HTMLElement;
  const diameter = Math.max(element.clientWidth, element.clientHeight);

  ripple.size = `${diameter}px`;
  ripple.left = `${x}px`;
  ripple.top = `${y}px`;
  ripple.show = true;

  emit('click', event);
};

const handleAnimationEnd = () => (ripple.show = false);

defineExpose({ createRipple });
</script>

<style module>
.ripple {
    display: inline-block !important;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.ripple-active {
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    left: v-bind('ripple.left');
    top: v-bind('ripple.top');
    background-color: rgba(255, 255, 255, 0.7);
    width: 0px;
    height: 0px;
    transition: 
        background-color .9s linear,
        width .9s linear, 
        height .9s linear;
}
.ripple-active-transition {
    width: calc(v-bind('ripple.size') * 2);
    height: calc(v-bind('ripple.size') * 2);
    background-color: rgba(255, 255, 255, 0);
}
</style>