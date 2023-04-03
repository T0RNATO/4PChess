<template>
<div class="hex" :style="{transform: translation}" :data-q="hex.q" :data-r="hex.r">
    <img :src="piece" v-if="hex.p" :alt="hex.p" class="piece">
</div>
</template>

<style>
/* --hex-size is equal to the radius of the hexagon (or the smallest circle it can fit in) */
.hex {
    @apply bg-purple-400 aspect-square absolute flex justify-center justify-center;
    width: calc(var(--hex-size) * 2);
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
}
.piece {
    width: 90%;
}
</style>

<script>
import {getSixPlayerPieceURL} from "~/utils/utils";

export default {
    props: {
        hex: Object
    },
    computed: {
        // Result is multiplied by 1.1 to add space between hexes
        // Hex size is subtracted at the end in order to center the hexes
        translation() {
            // I would put this on multiple lines but template literals keep whitespace ;-;
            return `translate(calc(var(--hex-size) * 1.1 * ${this.x} - var(--hex-size)), calc(var(--hex-size) * 1.1 * ${this.y} - var(--hex-size)))`;
        },

        // See https://www.redblobgames.com/grids/hexagons/#hex-to-pixel for formula explanation
        x() {
            return 3/2 * this.hex.q;
        },
        y() {
            return Math.sqrt(3)/2 * this.hex.q + Math.sqrt(3) * this.hex.r;
        },
        piece() {
            return getSixPlayerPieceURL(this.hex.p)
        }
    }
}
</script>