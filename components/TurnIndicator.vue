<template>
  <div class="turn-indicator">{{text}}</div>
</template>

<script>
import {useGameStore} from "@/stores/app";
export default {
  computed: {
    text: function() {
      const store = useGameStore(this.$pinia);
      if (store.mated[this.turn]) {
        return "CHECK\nMATED"
      } else {
        return "YOUR TURN"
      }
    }
  }, props: {
    turn: String
  }
}
</script>

<style scoped>
.turn-indicator {
  @apply absolute w-[9rem] h-[9rem] text-center text-2xl text-white font-bold flex flex-col justify-center items-center transition-all
}
.red {
  @apply bg-red-400 left-0 top-0 rotate-180;
}
.blue {
  @apply bg-blue-400 left-[calc(100%-9rem)] top-0 -rotate-90;
}
.yellow {
  @apply  bg-yellow-400 left-[calc(100%-9rem)] top-[calc(100%-9rem)];
}
.green {
  @apply bg-green-400 left-0 top-[calc(100%-9rem)] rotate-90;
}
div.disabled {
  @apply bg-[#323232] text-[#262626];
}
</style>
