<template>
    <div class="SixPC-Board">
        <SixPlayerHex v-for="hex of defaultBoard" :hex="hex"/>
    </div>
</template>

<script>
import {useSixPlayerStore} from "~/stores/sixPlayer";
import {mapState} from "pinia";
export default {
    computed: {
        ...mapState(useSixPlayerStore, ["defaultBoard"])
    }
}
</script>

<style>
.SixPC-Board {
    --hex-size: 4%;
}
</style>