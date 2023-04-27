<template>
    <div v-if="size !== 'large' && !float">
        <button 
          :class="{
            [color]: color !== 'none', 
            [color === 'none' ? 'primary' : color]: bordered,
            [size]: true,
            bordered
          }" 
          :disabled="disabled"
          @mouseup.stop="createRipple"
        >
            <Icon v-if="icon" 
                  :name="icon"
                  v-bind="options"
                  v-model:color="options.color"
            />

            <slot />

            <div v-if="ripple.show" 
                  class="ripple" 
                  @animationend="handleAnimationEnd"
            />
        </button>
    </div>

    <button 
      v-else 
      :class="{
        [color]: color !== 'none', 
        [size]: true, 
        [`float-${float}`]: !!float,
        [color === 'none' ? 'border-primary' : `border-${color}`]: bordered,
        bordered
      }" 
      :disabled="disabled"
      @mouseup.stop="createRipple"
    >
        <Icon v-if="icon"
              :name="icon"
              v-bind="options"
              v-model:color="options.color"
        />

        <slot />

        <div v-if="ripple.show"
              class="ripple"
              @animationend="handleAnimationEnd"
        />
    </button>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { Icon } from '../Icon';

const props = withDefaults(defineProps<{
    appbar?: boolean,
    icon?: string,
    options?: {
      type?: 'Outlined' | 'Filled' | 'Rounded' | 'Sharp' | 'Two tone',
      size?: '18px' | '24px' | '36px' | '48px',
      fill?: boolean,
      weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700,
      grade?: -25 | 0 | 200,
      color?: 'white' | 'black',
      rotate?: `${number}deg`
    },
    color?: 'primary' | 'secondary' | 'ternary' | 'none',
    flat?: boolean,
    circle?: boolean,
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    float?: 
      | 'top-left' | 'center-left' | 'bottom-left'
      | 'top-center' | 'center-center' | 'bottom-center' 
      | 'top-right' | 'center-right' | 'bottom-right' 
      | false,
    disabled?: boolean,
    bordered?: boolean,
}>(), {
    appbar: false,
    options: () => ({
      color: 'white',
      rotate: '0deg',
    }),
    color: 'none',
    flat: false,
    circle: false,
    small: false,
    medium: false,
    large: true,
    float: false,
    disabled: false,
    bordered: false,
});

const emit = defineEmits(['click']);

const ripple = reactive({
    size: '0px',
    left: '0px',
    top: '0px',
    show: false
});

const shadow = computed(() => props.flat ? 'none' : '0 0 0.5rem rgba(0, 0, 0, 0.3)');
const radius = computed(() => props.circle ? '200px' : '1.5rem');

const btnWidth = computed(() => props.appbar ? '3.5rem' : '5rem');
const btnHeight = computed(() => {
  if (props.icon) {
    return props.appbar ? '3.5rem' : '5rem';
  }
  return 'auto';
});
const paddingX = computed(() => props.icon ? 'auto' : '24px');
const paddingY = computed(() => props.icon ? 'auto' : '10px');

const size = computed<'small' | 'medium' | 'large'>(() => {
  if (props.small) return 'small';
  if (props.medium) return 'medium';
  if (props.large) return 'large';
  return 'large';
});

const createRipple = (event: MouseEvent) => {
  const { currentTarget, offsetX: x, offsetY: y } = event;
  const button = currentTarget as HTMLButtonElement;
  const diameter = Math.max(button.clientWidth, button.clientHeight);

  ripple.size = `${diameter}px`;
  x <= 80 && (ripple.left = `${x}px`)
  y <= 80 && (ripple.top = `${y}px`);
  ripple.show = true;

  emit('click', event);
};

const handleAnimationEnd = () => (ripple.show = false);
</script>

<style scoped>
:root button {
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  color: #fff;
  background-color: transparent;
  font-size: 1rem;
  outline: 0;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: v-bind(btnWidth);
  height: v-bind(btnHeight);
  border-radius: v-bind(radius);
  box-shadow: v-bind(shadow);

  padding-left: v-bind(paddingX);
  padding-right: v-bind(paddingX);

  padding-top: v-bind(paddingY);
  padding-bottom: v-bind(paddingY);

  margin-left: 4px;
  margin-right: 4px;
  
  box-sizing: content-box;

  --min-border-space: 15px;
}

:root button:not(.bordered) {
  background-color: var(--bg);
  color: var(--color);
}

:root button.bordered {
  border: 1px solid var(--border-color);
  color: var(--border-color);
}

button:disabled {
  filter: opacity(.5);
}

button.float-top-left {
  position: absolute;
  top: var(--min-border-space);
  left: var(--min-border-space);
}
button.float-center-left {
  position: absolute;
  bottom: 50%;
  left: var(--min-border-space);
  transform: translateY(50%);
} 
button.float-bottom-left {
  position: absolute;
  bottom: var(--min-border-space);
  left: var(--min-border-space);
}

button.float-top-center {
  position: absolute;
  top: var(--min-border-space);
  left: 50%;
  transform: translateX(-50%);
}
button.float-center-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
button.float-bottom-center {
  position: absolute;
  bottom: var(--min-border-space);
  left: 50%;
  transform: translateX(-50%);
}

button.float-top-right {
  position: absolute;
  top: var(--min-border-space);
  right: var(--min-border-space);
}
button.float-center-right {
  position: absolute;
  top: 50%;
  right: var(--min-border-space);
  transform: translateY(-50%);
}
button.float-bottom-right {
  position: absolute;
  bottom: var(--min-border-space);
  right: var(--min-border-space);
}

:root button:first-of-type,
:root div:first-child {
    margin-right: 4px;
    margin-left: 0px;
}
  
:root button:last-of-type,
:root div:last-child {
    margin-left: 4px;
    margin-right: 0px;
}

:root button.primary {
    --bg: var(--primary);
    --color: var(--on-primary);
}
  
:root button.secondary {
    --bg: var(--secondary);
    --color: var(--on-secondary);
}
  
:root button.ternary {
    --bg: var(--ternary);
    --color: var(--on-ternary);
}

:root button.bordered.border-primary {
    --border-color: var(--primary);
}
  
:root button.bordered.border-secondary {
    --border-color: var(--secondary);
}
  
:root button.bordered.border-ternary {
    --border-color: var(--ternary);
}
  
:root div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
  
:root div button[small],
:root div button.small {
    width: 2rem;
    height: 2rem;
}
  
:root div button[medium],
:root div button.medium {
    width: 2.5rem;
    height: 2.5rem;
}
</style>

<style scoped>
div.ripple {
  display: block;
  position: absolute;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple 900ms linear forwards;
  background-color: rgba(255, 255, 255, 0.7);
  width: 0px;
  height: 0px;
  left: v-bind('ripple.left');
  top: v-bind('ripple.top');
}

@keyframes ripple {
    to {
        width: calc(v-bind('ripple.size') * 2);
        height: calc(v-bind('ripple.size') * 2);
        opacity: 0;
    }
}
</style>

<style scoped>
button :deep(span svg path) {
  fill: var(--color);
}

button :deep(span svg) {
    transform: rotate(v-bind('props.options.rotate'));
}
</style>