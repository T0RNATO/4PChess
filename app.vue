<template>
    <div id="body">
        <div @click="closeMenu" id="root" :class="[settings.theme]">
            <img src="@/assets/images/settings.svg"
                 class="absolute m-2 right-0 w-8 hover:rotate-45 transition-all cursor-pointer"
                 @click="toggleMenu" alt="Settings Button"/>
            <div class="w-full flex justify-center h-[100vh] items-center">
                <FourPlayerGame :selected="selected" v-if="!settings.sixPlayer"/>
                <SixPlayerGame v-if="settings.sixPlayer"/>
            </div>
            <SettingsMenu v-if="settingsMenuIsOpen" :class="{fadeOut: menuIsFadingOut}" v-animationend="anEnd"/>
        </div>
    </div>
</template>

<script>
import {useFourPlayerStore} from "~/stores/fourPlayer";
import {mapState} from "pinia";
import {lerpBg} from "~/utils/utils";

export default {
    mounted() {
        const store = useFourPlayerStore();
        if (localStorage.data) {
            const data = JSON.parse(localStorage.data);
            store.setState(data);
        }
    },
    computed: {
        ...mapState(useFourPlayerStore, ["check", "turn", "board", "mated", "selected", "castle", "highlight", "settings"]),
    },
    data() {
        return {
            settingsMenuIsOpen: false,
            menuIsFadingOut: false
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
            if (this.menuIsFadingOut) {
                this.menuIsFadingOut = false;
                this.settingsMenuIsOpen = false;
            }
        },
        closeMenu() {
            if (this.settingsMenuIsOpen) {
                this.menuIsFadingOut = true;
            }
        },
        toggleMenu(event) {
            if (!this.settingsMenuIsOpen) {
                event.stopPropagation();
                this.settingsMenuIsOpen = true;
            }
        }
    },
    watch: {
        turn: {
            handler(newTurnValue, oldTurnValue) {
                lerpBg(document.querySelector("#body"), oldTurnValue, newTurnValue);
            }
        }
    }
}
</script>

<style src="/assets/css/main.css"></style>