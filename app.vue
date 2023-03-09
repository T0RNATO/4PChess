<template>
    <div @click="closeMenu">
        <img src="@/assets/images/settings.svg" class="absolute m-2 right-0 w-8 hover:rotate-45 transition-all cursor-pointer"
             @click="toggleMenu" alt="Settings Button"/>
        <div class="w-full flex justify-center h-[100vh] items-center">
            <Game :selected="selected"/>
        </div>
        <SettingsMenu v-if="settings" :class="{fadeOut: fadeOut}" v-animationend="anEnd"/>
    </div>
</template>

<script>
import { useGameStore } from "@/stores/app";
import { mapState } from "pinia";

export default {
    mounted() {
        const store = useGameStore();
        if (localStorage.data) {
            const data = JSON.parse(localStorage.data);
            store.setState(data);
        }
    },
    computed: {
        ...mapState(useGameStore, ["check", "turn", "board", "mated", "selected"]),
    },
    data() {
        return {
            settings: false,
            fadeOut: false,
        }
    },
    directives: {
        animationend: {
            mounted(el, binding) {
                el.addEventListener('animationend', binding.value);
            }
        }
    },
    methods: {
        anEnd() {
            if (this.fadeOut) {
                this.fadeOut = false;
                this.settings = false;
            }
        },
        closeMenu() {
            this.fadeOut = true;
        },
        toggleMenu(e) {
            if (!this.settings) {
                e.stopPropagation();
                this.settings = true;
            }
        }
    }
}
</script>

<style>
body {
    background-color: #262626;
}
</style>