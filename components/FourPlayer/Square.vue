<template>
    <div :class="classes" :data-pos="String(pos)" @click="clickHandler">
        <img :src="rotated[piece]" draggable="false" v-if="piece" :class="{mated_piece: mated[piece.charAt(1)]}"/>
    </div>
</template>

<style src="../../assets/css/squares.css"></style>

<script>
import {arrHasArr} from "~/utils/utils";
import {useFourPlayerStore} from "~/stores/fourPlayer";
import {mapState} from "pinia";

export default {
    props: {
        piece: String,
        pos: Array
    },
    computed: {
        inCheck() {
            const store = useFourPlayerStore();
            if (this.piece.charAt(0) === "K") {
                return store.check[this.piece.charAt(1)];
            }
            return false
        },
        highlightedMoves() {
            let out = {};
            for (const [k, v] of Object.entries(this.highlight)) {
                out["col-" + k] = arrHasArr(v, this.pos);
            }
            return out;
        },
        classes() {
            return {
                'square': true,
                'check': this.inCheck,
                'selected': this.pos.every((elem, i) => {
                    return elem === this.selected[i];
                }),
                ...this.highlightedMoves
            }
        },
        ...mapState(useFourPlayerStore, ["selected", "highlight", "mated", "turn"])
    },
    methods: {
        clickHandler() {
            const store = useFourPlayerStore();
            if (["capture-move", "valid-move", "castle-l", "castle-r"].some((el) => {
                return this.$el.classList.contains(el)
            })) {
                if (this.$el.classList.contains("castle-l")) {
                    store.movePiece(this.pos, "l");
                } else if (this.$el.classList.contains("castle-r")) {
                    store.movePiece(this.pos, "r");
                } else {
                    store.movePiece(this.pos);
                }
                for (const el of document.querySelectorAll(".square")) {
                    el.classList.remove("valid-move", "capture-move", "castle-r", "castle-l");
                }

                store.clearCheck()

                const board = store.board;
                for (const [i, row] of board.entries()) {
                    for (const [j, square] of row.entries()) {
                        // If piece in square
                        if (square && !store.mated[square.charAt(1)]) {
                            // Loop through capturing moves
                            for (const move of getMoves(j, i, board).filter(move => move[2] === "capture-move")) {
                                // If the move can "capture" the king,
                                if (board[move[1]][move[0]].charAt(0) === "K") {
                                    // Put player in check
                                    store.putInCheck(board[move[1]][move[0]].charAt(1));
                                }
                            }
                        }
                    }
                }

                // Checkmate
                let mate = true;
                for (const [i, row] of board.entries()) {
                    for (const [j, square] of row.entries()) {
                        if (square && square.charAt(1) === String(store.turn)) {
                            if (getNonCheckingMoves(j, i, board, store).length) {
                                mate = false;
                            }
                        }
                    }
                }
                if (mate) {
                    store.mate(store.turn);
                }

            } else {
                store.selectPiece([]);
                for (const el of document.querySelectorAll(".square")) {
                    el.classList.remove("valid-move", "capture-move", "castle-r", "castle-l");
                }
                if (this.piece
                    && Number(this.piece.charAt(1)) === store.turn
                ) {
                    store.selectPiece(this.pos);
                    for (const move of getNonCheckingMoves(this.pos[0], this.pos[1], store.board, store)) {
                        getSquareAtPos(move[0], move[1]).classList.add(move[2]);
                    }
                }
            }
        }
    }
}
</script>

<script setup>
import {rotated} from "~/utils/fourPlayer";
</script>