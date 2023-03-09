<template>
  <div class="modal" @click.stop="">
    <h1 class="text-4xl font-bold mt-5">Settings</h1>
    <button class="bg-red-500 p-4 rounded-md m-4" @click="resetBoard">Reset Board</button>
  </div>
</template>

<script>
export default {
  methods: {
    resetBoard() {
      if (confirm("Reset Game?")) {
        delete localStorage.data;
        location.reload();
      }
    },
    close() {
      if (this.$el.classList.contains("fadeOut")) {
        console.log("pain and suffering")
        this.$emit("closeMenu");
      }
    }
  },
  mounted() {
    this.$el.addEventListener("animationend", this.close)
  },
  destroyed() {
    this.$el.removeEventListener("animationend", this.close)
  }
}
</script>

<style>
.modal {
  @apply absolute bg-[#262626] rounded-3xl h-[90%] w-[40rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[rgba(0_0_0/0.3)] text-white flex flex-col items-center opacity-0 transition-all;
  animation: fadeIn 0.2s ease-in-out forwards;
}
.fadeOut {
  animation: fadeOut 0.2s ease-in-out forwards;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
