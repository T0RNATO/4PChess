<template>
    <div class="modal" @click.stop="">
        <h1 class="text-4xl font-bold mt-5 mb-5">Settings</h1>
        <div>
            <h2 class="text-2xl font-semibold text-center">Theme:</h2>
            <input type="radio" v-model="settings.theme" value="purple" class="theme" style="outline-color: var(--purple);">
            <input type="radio" v-model="settings.theme" value="orange" class="theme" style="outline-color: var(--orange);">
            <input type="radio" v-model="settings.theme" value="blue" class="theme" style="outline-color: var(--blue);">
            <input type="radio" v-model="settings.theme" value="green" class="theme" style="outline-color: var(--green);">
            <input type="radio" v-model="settings.theme" value="red" class="theme" style="outline-color: var(--red);">
            <input type="radio" v-model="settings.theme" value="brown" class="theme" style="outline-color: var(--brown);">
            <input type="radio" v-model="settings.theme" value="grey" class="theme" style="outline-color: var(--grey);">
        </div>
        <div>
            <h2 class="text-2xl font-semibold text-center">Timer:</h2>
            <h2 class="font-medium inline mr-2">Time:</h2>
            <select v-model.number="timers" :disabled="gameStarted">
                <option value="60">1 minute</option>
                <option value="120">2 minutes</option>
                <option value="300">5 minutes</option>
                <option value="600">10 minutes</option>
                <option value="720">12 minutes</option>
                <option value="900">15 minutes</option>
                <option value="1200">20 minutes</option>
            </select><br>
            <h2 class="font-medium inline mr-2">Increment:</h2>
            <select v-model.number="inc" :disabled="gameStarted">
                <option value="0">None</option>
                <option value="1">1 second</option>
                <option value="2">2 seconds</option>
                <option value="3">3 seconds</option>
                <option value="5">5 seconds</option>
                <option value="10">10 seconds</option>
            </select>
        </div>

        <button class="bg-red-500 p-4 rounded-md m-4" @click="resetBoard">Reset Game</button>
    </div>
</template>

<script>
import {mapWritableState} from "pinia";
import {useGameStore} from "~/stores/fourPlayer";

export default {
    methods: {
        resetBoard() {
            if (confirm("Reset Game?")) {
                delete localStorage.data;
                location.reload();
            }
        }
    },
    computed: {
        ...mapWritableState(useGameStore, ["settings", "gameStarted", "time", "inc"]),
        timers: {
            set(newTime) {
                for (const key in this.time) {
                    this.time[key] = newTime;
                }
            },
            get() { return this.time["0"]; }
        }
    }
}
</script>

<style>
.modal {
  @apply absolute bg-[#262626] rounded-3xl h-[90%] w-[40rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[rgba(0_0_0/0.3)] text-white flex flex-col items-center transition-all;
  animation: fadeIn 0.3s cubic-bezier(.48,.47,.55,1.31) forwards;
}
.fadeOut {
  animation: fadeOut 0.3s cubic-bezier(.45,-0.56,.48,.47) forwards;
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.theme {
    @apply w-4 aspect-square m-2 outline-offset-[-100px] outline-8 outline
}
.theme:checked {
    box-shadow: white 0 0 0 2px;
}
option, select {
    color: black !important;
}
</style>
