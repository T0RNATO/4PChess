import { defineStore } from 'pinia'
import { arrHasArr, castleRook } from "~/utils/utils";

export const useGameStore = defineStore('game', {
    state: () => ({
        turn: 0,
        selected: [],
        check: {
            "0": false,
            "1": false,
            "2": false,
            "3": false
        },
        mated: {
            "0": false,
            "1": false,
            "2": false,
            "3": false
        },
        // board: [
        //     [null, null, null, "R0","N0","B0","K0","Q0","B0","N0","R0", null, null, null],
        //     [null, null, null, "P0","P0","P0","P0","P0","P0","P0","P0", null, null, null],
        //     [null, null, null, "","","","","","","","", null, null, null],
        //     ["R3","P3","","","","","","","","","","","P1","R1"],
        //     ["N3","P3","","","","","","","","","","","P1","N1"],
        //     ["B3","P3","","","","","","","","","","","P1","B1"],
        //     ["Q3","P3","","","","","","","","","","","P1","K1"],
        //     ["K3","P3","","","","","","","","","","","P1","Q1"],
        //     ["B3","P3","","","","","","","","","","","P1","B1"],
        //     ["N3","P3","","","","","","","","","","","P1","N1"],
        //     ["R3","P3","","","","","","","","","","","P1","R1"],
        //     [null, null, null, "","","","","","","","", null, null, null],
        //     [null, null, null, "P2","P2","P2","P2","P2","P2","P2","P2", null, null, null],
        //     [null, null, null, "R2","N2","B2","Q2","K2","B2","N2","R2", null, null, null],
        // ],
        board: [
            [null, null, null, "R0","N0","B0","K0","Q0","B0","N0","R0", null, null, null],
            [null, null, null, "P0","P0","P0","P0","","P0","P0","P0", null, null, null],
            [null, null, null, "","","","","","","","", null, null, null],
            ["R3","P3","","","","","","","","","","","P1","R1"],
            ["N3","P3","","","","","","","","","","","P1","P1"],
            ["B3","P3","","","","","","","","","","","P1","P1"],
            ["Q3","P3","","","","","","","","","","","","K1"],
            ["K3","P3","","","","","","","","","","","P1","P1"],
            ["B3","P3","","","","","","","","","","","P1","B1"],
            ["N3","P3","","","","","","","","","","","P1","N1"],
            ["R3","P3","","","","","","","","","","","P1","R1"],
            [null, null, null, "","","","","","","","", null, null, null],
            [null, null, null, "P2","P2","P2","P2","P2","P2","P2","P2", null, null, null],
            [null, null, null, "R2","N2","B2","Q2","K2","B2","N2","R2", null, null, null],
        ],
        highlight: {
            0: [],
            1: [],
            2: [],
            3: []
        },
        castle: {
            0: {l: true, r: true},
            1: {l: true, r: true},
            2: {l: true, r: true},
            3: {l: true, r: true}
        }
    }),
    actions: {
        /**
         * @param {Number[]} pos
         * @param {Boolean | String} castle
         */
        movePiece(pos, castle = false) {
            const movedPiece = this.board[this.selected[1]][this.selected[0]];
            this.board[pos[1]][pos[0]] = movedPiece;

            // Promotion
            if (movedPiece.charAt(0) === "P") {
                const player = movedPiece.charAt(1);
                if ((player === "0" && pos[1] === 7) ||
                    (player === "1" && pos[0] === 6) ||
                    (player === "2" && pos[1] === 6) ||
                    (player === "3" && pos[0] === 7)) {
                    this.board[pos[1]][pos[0]] =  "Q" + player;
                }
            }
            this.board[this.selected[1]][this.selected[0]] = "";

            this.highlight[this.turn] = [pos, this.selected];

            // Invalidate castling
            if (movedPiece.charAt(0) === "K") {
                this.castle[this.turn]["l"] = false;
                this.castle[this.turn]["r"] = false;
            }
            if (movedPiece.charAt(0) === "R") {
                if (arrHasArr([[3, 13], [0, 3], [10, 0], [13, 10]], this.selected)) {
                    this.castle[this.turn]["l"] = false;
                }
                if (arrHasArr([[10, 13], [0, 10], [3, 0], [13, 3]], this.selected)) {
                    this.castle[this.turn]["r"] = false;
                }
            }

            if (castle) {
                castleRook(castle, this);
            }

            this.incrementTurn();
            this.selectPiece([]);
        },
        selectPiece(pos) {
            this.selected = pos;
        },
        incrementTurn() {
            this.turn++;
            if (this.turn === 4) {
                this.turn = 0;
            }
            while (this.mated[this.turn]) {
                this.turn++;
                if (this.turn === 4) {
                    this.turn = 0;
                }
            }
            this.highlight[this.turn] = [];
        },
        putInCheck(player) {
            this.check[player] = true;
        },
        clearCheck() {
            this.check = {
                "0": false,
                "1": false,
                "2": false,
                "3": false
            };
        },
        mate(player) {
            this.mated[player] = true;
            for (const [i, row] of this.board.entries()) {
                for (const [j, square] of row.entries()) {
                    console.log(square, player)
                    if (square && square.charAt(1) === player) {
                        this.board[j][i] = "";
                    }
                }
            }
        },
        setState(newState) {
            for (const key in newState) {
                this[key] = newState[key];
            }
        }
    },
})