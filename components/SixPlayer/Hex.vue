<template>
<div class="hex" :style="{transform: `translate(${x}, ${y})`}"></div>
</template>

<style>
.hex {
    @apply bg-purple-400 aspect-square;
    width: var(--hex-size);
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
}
</style>

<script>
export default {
    props: {
        hex: Object
    },
    computed: {
        x() {
            return "calc(var(--hex-size)*" + 3/2 * this.hex.q + ")";
        },
        y() {
            return "calc(var(--hex-size)*" + (Math.sqrt(3)/2 * this.hex.q + Math.sqrt(3) * this.hex.r) + ")";
        }
    }
}
</script>