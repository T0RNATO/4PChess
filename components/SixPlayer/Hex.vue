<template>
<div class="hex"></div>
</template>

<style>
.hex {
    @apply bg-purple-400 aspect-square;
    width: 4%;
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
}
</style>

<script>
export default {
    props: {
        hex: Object
    }
}
</script>