<template>
    <div class="player-info">
        <div class="timer" :class="{disabled: turn !== player, low: time[player] < 60 && turn === player}">
            <img src="@/assets/images/timer.svg" alt="timer" class="inline w-6 mr-2">
            {{playerTime}}
        </div>
    </div>
</template>

<script>
import {useGameStore} from "@/stores/app";
import {mapState} from "pinia";
export default {
    computed: {
        ...mapState(useGameStore, ["time", "turn"]),
        playerTime() {
            const mins = Math.floor(this.time[this.player] / 60);
            let secs = this.time[this.player] % 60
            if (String(secs).length === 1) {
                secs = "0" + secs;
            }
            return mins + ":" + secs;
        }
    },
    props: {
        player: Number
    }
}
</script>

<style>
.player-info {
    @apply absolute w-[9rem] h-[9rem] flex flex-col justify-center items-center;
}
.timer {
    @apply bg-white rounded-md text-2xl p-2 font-semibold flex justify-center items-center transition-all;
}
.timer.disabled {
    @apply bg-gray-400;
}
.timer.low {
    @apply text-red-500 animate-pulse;
}
.player-0 {
    @apply left-0 top-0 rotate-180;
}
.player-1 {
    @apply left-[calc(100%-9rem)] top-0 -rotate-90;
}
.player-2 {
    @apply left-[calc(100%-9rem)] top-[calc(100%-9rem)];
}
.player-3 {
    @apply left-0 top-[calc(100%-9rem)] rotate-90;
}
</style>