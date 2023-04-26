<template>
    <div>
        <slot />
    </div>
</template>

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