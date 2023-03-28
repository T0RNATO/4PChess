<template>
    <div id="body">
    <div @click="closeMenu" id="root" :class="[settings.theme]">
        <img src="@/assets/images/settings.svg" class="absolute m-2 right-0 w-8 hover:rotate-45 transition-all cursor-pointer"
             @click="toggleMenu" alt="Settings Button"/>
        <div class="w-full flex justify-center h-[100vh] items-center">
            <FourPlayerGame :selected="selected"/>
<!--            <SixPlayerGame/>-->
        </div>
        <SettingsMenu v-if="settingsMenu" :class="{fadeOut: fadeOut}" v-animationend="anEnd"/>
    </div>
    </div>
</template>

<script>
import { useGameStore } from "~/stores/fourPlayer";
import { mapState } from "pinia";
import { lerpBg } from "~/utils/utils";

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
            fadeOut: false
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
        toggleMenu(event) {
            if (!this.settingsMenu) {
                event.stopPropagation();
                this.settingsMenu = true;
            }
        }
    },
    watch: {
        turn: {
            handler(newTurnValue, oldTurnValue){
                lerpBg(document.querySelector("#body"), oldTurnValue, newTurnValue);
            }
        }
    }
}
</script>

<style src="/assets/css/main.css"></style>