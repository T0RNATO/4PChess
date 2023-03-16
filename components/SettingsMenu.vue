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
        <button class="bg-red-500 p-4 rounded-md m-4" @click="resetBoard">Reset Game</button>
    </div>
</template>

<script>
import {mapWritableState} from "pinia";
import {useGameStore} from "~/stores/app";

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
        ...mapWritableState(useGameStore, ["settings"])
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
</style>
