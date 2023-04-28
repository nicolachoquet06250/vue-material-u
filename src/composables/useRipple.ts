import { ref } from "vue";

export const useRipple = () => {
    const ripple = ref<RippleExpose>();

    return { 
        ripple,
        createRipple: (e: MouseEvent) => ripple.value?.createRipple(e) ?? (() => {})
    };
};