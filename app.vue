<template>
    <div>
        <img src="@/assets/images/settings.svg" class="absolute m-2 right-0 w-8 hover:rotate-45 transition-all cursor-pointer"
             @click.stop=""/>
        <div class="w-full flex justify-center h-[100vh] items-center">
            <Game :selected="selected" ref="game"/>
        </div>
<!--        <SettingsMenu/>-->
    </div>
</template>

<script>
import { useGameStore } from "@/stores/app";

export default {
    mounted() {
        const store = useGameStore();
        if (localStorage.data) {
            const data = JSON.parse(localStorage.data);
            store.setState(data);
        }
    },
    computed: {
        selected() {
            const store = useGameStore();
            return store.selected;
        }
    }
}
</script>

<style>
body {
    background-color: #262626;
}
</style>