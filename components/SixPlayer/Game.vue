<template>
<SixPlayerHex v-for="hex of defaultBoard" :hex="hex"/>
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