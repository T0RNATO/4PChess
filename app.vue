<template>
    <div @click="closeMenu" id="root" :class="[settings.theme]">
        <img src="@/assets/images/settings.svg" class="absolute m-2 right-0 w-8 hover:rotate-45 transition-all cursor-pointer"
             @click="toggleMenu" alt="Settings Button"/>
        <div class="w-full flex justify-center h-[100vh] items-center">
            <Game :selected="selected"/>
        </div>
        <SettingsMenu v-if="settingsMenu" :class="{fadeOut: fadeOut}" v-animationend="anEnd"/>
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
        ...mapState(useGameStore, ["check", "turn", "board", "mated", "selected", "castle", "highlight", "settings"]),
    },
    data() {
        return {
            settingsMenu: false,
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
                this.settingsMenu = false;
            }
        },
        closeMenu() {
            if (this.settingsMenu) {
                this.fadeOut = true;
            }
        },
        toggleMenu(e) {
            if (!this.settingsMenu) {
                e.stopPropagation();
                this.settingsMenu = true;
            }
        }
    }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
    background-color: #262626;
    overflow-x: hidden;
}
#root.blue {--theme: #70acf9;}
#root.green {--theme: #579355;}
#root.grey {--theme: #bcbcbc;}
#root.orange {--theme: #e6936e;}
#root.brown {--theme: #7d5a4c;}
#root.red {--theme: #ff6e6e;}
#root.purple {--theme: #c084fc;}
</style>
