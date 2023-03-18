<template>
  <div class="flex flex-col items-center justify-center w-[49rem] h-[49rem] relative">
      <div class="row group"
           v-for="[i, row] in board.map(subarray => subarray.filter(el => el != null)).entries()"
           :key="i" >
        <Square v-for="[j, piece] in row.entries()"
                :key="String(j) + String(i)"
                :class="{'square-invert': row.length === 14}"
                :piece="piece"
                :pos="row.length === 14 ? [j, i] : [j + 3, i]" />
      </div>
      <PlayerInfo :player="0" class="player-0"/>
      <PlayerInfo :player="1" class="player-1"/>
      <PlayerInfo :player="2" class="player-2"/>
      <PlayerInfo :player="3" class="player-3"/>
  </div>
</template>

<style>
.row {
  @apply m-0 p-0 h-14;
}
</style>

<script>
import {useGameStore} from "@/stores/app";
import {mapState} from "pinia";
import PlayerInfo from "~/components/PlayerInfo.vue";

export default {
    components: {PlayerInfo},
    computed: {
        ...mapState(useGameStore, ["board", "turn"]),
    }
}
</script>