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
    <TurnIndicator :class="{red: true, disabled: turn !== 0}" turn=0 />
    <TurnIndicator :class="{blue: true, disabled: turn !== 1}" turn=1 />
    <TurnIndicator :class="{yellow: true, disabled: turn !== 2}" turn=2 />
    <TurnIndicator :class="{green: true, disabled: turn !== 3}" turn=3 />
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

export default {
  computed: {
    ...mapState(useGameStore, ["board", "turn"]),
  }
}
</script>