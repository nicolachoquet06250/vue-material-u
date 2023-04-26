<template>
    <div v-if="size !== 'large' && !float">
        <button 
          :class="{
            [color]: color !== 'none', 
            [size]: true,
          }" 
          :disabled="disabled"
          @click="createRipple"
        >
            <Icon v-if="icon" 
                  :name="icon"
                  v-bind="options"
                  v-model:color="options.color"
            />

            <slot />

            <span v-if="ripple.show" 
                  class="ripple" 
                  @animationend="ripple.show = false"
            />
        </button>
    </div>

    <button 
      v-else 
      :class="{
        [color]: color !== 'none', 
        [size]: true, 
        [`float-${float}`]: !!float
      }" 
      :disabled="disabled"
      @click="createRipple"
    >
        <Icon v-if="icon"
              :name="icon"
              v-bind="options"
              v-model:color="options.color"
        />

        <slot />

        <span v-if="ripple.show"
              class="ripple"
              @animationend="ripple.show = false"
        />
    </button>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { Icon } from '../';

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
    disabled?: boolean
}>(), {
    appbar: false,
    options: () => ({
      color: 'white'
    }),
    color: 'none',
    flat: false,
    circle: false,
    small: false,
    medium: false,
    large: true,
    float: false,
    disabled: false,
});

const emit = defineEmits(['click']);

const ripple = reactive({
    width: '0px',
    height: '0px',
    left: '0px',
    top: '0px',
    show: false
});

const width = computed(() => ripple.width);
const height = computed(() => ripple.height);
const left = computed(() => ripple.left);
const top = computed(() => ripple.top);

const shadow = computed(() => props.flat ? 'none' : '0 0 0.5rem rgba(0, 0, 0, 0.3)');
const radius = computed(() => props.circle ? '200px' : '1.5rem');

const btnWidth = computed(() => props.appbar ? '3.5rem' : '5rem');
const btnHeight = computed(() => props.appbar ? '3.5rem' : '5rem');

const size = computed<'small' | 'medium' | 'large'>(() => {
  if (props.small) return 'small';
  if (props.medium) return 'medium';
  if (props.large) return 'large';
  return 'large';
});

function createRipple(event: MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement;

    const diameter = Math.max(button?.clientWidth, button?.clientHeight);
    const radius = diameter / 2;

    ripple.width = `${diameter}px`;
    ripple.height = `${diameter}px`;
    ripple.left = `${event.clientX - button?.offsetLeft - radius}px`;
    ripple.top = `${event.clientY - button?.offsetTop - radius}px`;
    ripple.show = true;

    emit('click', event);
}
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
  
    margin-left: 4px;
    margin-right: 4px;

    background-color: var(--bg);
    color: var(--color);

    --min-border-space: 15px;
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
  
span.ripple {
    position: absolute; /* The absolute position we mentioned earlier */
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
    width: v-bind(width);
    height: v-bind(height);
    left: v-bind(left);
    top: v-bind(top);
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

button :deep(span svg path) {
  fill: var(--color);
}

button :deep(span svg) {
    transform: rotate(v-bind('props.options.rotate'));
}
</style>