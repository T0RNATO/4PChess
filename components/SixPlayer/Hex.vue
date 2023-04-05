<template>
<div :class="classes" :style="{transform: translation}" :data-q="hex.q" :data-r="hex.r" @click.stop="click" v-on:dblclick="hi">
<!--    {{hex.q}},{{hex.r}},{{-hex.q - hex.r}}-->
    <img :src="piece" v-if="hex.p" :alt="hex.p" class="piece">
</div>
</template>

<style>
/* --hex-size is equal to the radius of the hexagon (or the smallest circle it can fit in) */
.hex {
    @apply bg-purple-400 aspect-square absolute flex justify-center justify-center transition-all;
    width: calc(var(--hex-size) * 2);
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
    font-size: 8px;
}
.piece {
    width: 90%;
    user-select: none;
}
.hex.white {
    @apply bg-purple-100;
}
.pink {
    @apply bg-purple-300;
}
.selected {
    @apply !bg-orange-400;
}
.validMove::after, .capture::after {
    content: "";
    border-radius: 50%;
    position: absolute;
    top: 50%;
    display: block;
    transform: translate(0, -50%);
}
.validMove::after {
    animation: appear 0.1s cubic-bezier(.6,.17,.66,1.72) forwards;
    background: rgba(50, 50, 50, 0.5);
    width: 12px;
    height: 12px;
}
.capture::after {
    border: 6px solid rgba(218, 44, 44, 0.5);
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
    width: calc(var(--hex-size) * 2);
    aspect-ratio: 1/1;
}
@keyframes appear {
    0% {
        width: 0;
        height: 0;
    }
    100% {
        width: 12px;
        height: 12px;
    }
}
</style>

<script>
import {getPiece, getPieceUrl} from "~/utils/sixPlayer";
import { useSixPlayerStore } from "~/stores/sixPlayer";
import { arrHasArr } from "~/utils/utils";

export default {
    props: {
        hex: Object
    },
    methods: {
        click() {
            useSixPlayerStore().clickHandler(this.hex.q, this.hex.r);
        },
        hi() {
            getPiece(this.hex.r, this.hex.q, useSixPlayerStore().defaultBoard).p = prompt("piece");
        }
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
            return getPieceUrl(this.hex.p)
        },
        classes() {
            const store = useSixPlayerStore();
            return {
                hex: true,
                white: this.hex.r % 2 && this.hex.q % 2,
                pink: this.hex.r % 2 || this.hex.q % 2,
                selected: store.selected[0] === this.hex.q && store.selected[1] === this.hex.r,
                validMove: arrHasArr(store.validMoves, [this.hex.q, this.hex.r]) && !this.hex.p,
                capture: arrHasArr(store.validMoves, [this.hex.q, this.hex.r]) && this.hex.p
            }
        }
    }
}
</script>