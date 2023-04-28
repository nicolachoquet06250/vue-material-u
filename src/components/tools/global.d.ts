export {};

declare global {
    interface RippleExpose {
        createRipple: (e: MouseEvent) => void;
    };
}