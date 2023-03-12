<template>
  <img :src="rotated[piece]"/>
</template>

<script setup>
import { rotated } from "../utils/utils"
</script>

<script>
export default {
  props: {
    piece: String,
    pos: Array
  }
}
</script>
