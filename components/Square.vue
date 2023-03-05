<template>
  <div :class="{'square': true, 'check': inCheck, 'selected': selected === pos}" :data-pos="pos" @click="clickHandler">
    <Piece :piece="piece" :pos="pos" v-if="piece"/>
  </div>
</template>

<style src="assets/css/index.css"></style>

<script>
import {getNonCheckingMoves, getSquareAtPos, getMoves} from "@/utils/utils";
import {useGameStore} from "@/stores/app";
import {mapState} from "pinia";

export default {
  props: {
    piece: String,
    pos: Array
  },
  computed: {
    inCheck() {
      const store = useGameStore();
      if (this.piece.charAt(0) === "K") {
        return store.check[this.piece.charAt(1)];
      }
      return false
    },
    ...mapState(useGameStore, ["selected"])
  },
  methods: {
    clickHandler() {
      const store = useGameStore();
      if (this.$el.classList.contains("valid-move") || this.$el.classList.contains("capture-move")) {
        store.movePiece(this.pos);
        store.incrementTurn();
        store.selectPiece([]);
        for (const el of document.querySelectorAll(".square")) {
          el.classList.remove("valid-move", "capture-move");
        }

        store.clearCheck()

        const board = store.board;
        for (const [i,row] of board.entries()) {
          for (const [j, square] of row.entries()) {
            // If piece in square
            if (square) {
              for (const move of getMoves(j, i, board).filter(move => move[2] === "capture-move")) {
                if (board[move[1]][move[0]].charAt(0) === "K") {
                  store.putInCheck(board[move[1]][move[0]].charAt(1));
                }
              }
            }
          }
        }

        // Checkmate
        let mate = true;
        for (const [i,row] of board.entries()) {
          for (const [j, square] of row.entries()) {
            if (square && square.charAt(1) === String(store.turn)) {
              if (getNonCheckingMoves(j, i, board).length) {
                mate = false;
              }
            }
          }
        }
        if (mate) {
          store.mate(Number(store.turn));
          store.incrementTurn();
        }

        localStorage.data = JSON.stringify(store);

      } else {
        store.selectPiece([]);
        for (const el of document.querySelectorAll(".square")) {
          el.classList.remove("valid-move", "capture-move");
        }
        if (this.piece
          && Number(this.piece.charAt(1)) === store.turn
        ) {
          store.selectPiece(this.pos);
          for (const move of getNonCheckingMoves(this.pos[0], this.pos[1], store.board)) {
            getSquareAtPos(move[0], move[1]).classList.add(move[2]);
          }
        }
      }
    }
  }
}
</script>
