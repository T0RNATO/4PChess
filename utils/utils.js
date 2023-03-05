export function getMoves(xPos, yPos, board) {
  const tpos = [xPos, yPos];
  const activePiece = board[yPos][xPos];
  const activeType = board[yPos][xPos].charAt(0);
  const activePlayer = board[yPos][xPos].charAt(1);
  let dirs = [];
  let possibleMoves = [];

  // QUEEN, ROOK, AND BISHOP MOVES
  switch(activeType) {
    case "Q": // fallthrough
    case "B": // fallthrough
      dirs = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
      if (activeType === "B") {
        break;
      }
    case "R":
      dirs = dirs.concat([[0, 1], [0, -1], [-1, 0], [1, 0]]);
      break;
  }
  if (activeType === "Q" || activeType === "R" || activeType === "B") {
    for (const d of dirs) {
      let i = 1;
      while (true) {
        const x = tpos[0] + d[0] * i;
        const y = tpos[1] + d[1] * i;
        if (x >= 14 || y >= 14 || x < 0 || y < 0) break;
        const piece = board[y][x];
        if (piece === null || piece === undefined) break;
        if (piece === "") {
          possibleMoves.push([x, y, "valid-move"]);
        } else if (piece.charAt(1) !== activePlayer) {
          possibleMoves.push([x, y, "capture-move"]);
          break;
        } else if (piece.charAt(1) === activePlayer) {
          break;
        }
        i++;
      }
    }
  }

  // PAWN MOVES
  if (activeType === "P") {
    const player = Number(activePlayer);
    if (player === 0 || player === 2) {
      possibleMoves = pawnMove([tpos[0], tpos[1] - player + 1],
        [tpos[0], tpos[1] - 2 * (player - 1)],
        tpos, 1, possibleMoves, board, activePlayer);

    } else if (player === 1 || player === 3) {
      possibleMoves = pawnMove([tpos[0] + player - 2, tpos[1]],
        [tpos[0] + 2 * (player - 2), tpos[1]],
        tpos, 0, possibleMoves, board, activePlayer);
    }
  }

  // HORSEY + KING MOVES
  let moves = [];
  if (activeType === "K") {
    moves = [[1, 1], [1, -1], [-1, -1], [-1, 1], [0, 1], [0, -1], [-1, 0], [1, 0]];
  } else if (activeType === "N") {
    moves = [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]];
  }
  for (const m of moves) {
    const pieceXY = [tpos[0] + m[0], tpos[1] + m[1]]
    if (pieceXY.every((coord) => coord >= 0 && coord < 14)) {
      const piece = board[tpos[1] + m[1]][tpos[0] + m[0]];
      if ([null, undefined].every((e) => e !== piece) && piece.charAt(1) !== activePlayer) {
        possibleMoves.push([tpos[0] + m[0], tpos[1] + m[1], piece ? "capture-move" : "valid-move"]);
      }
    }
  }

  return possibleMoves;
}
function pawnMove(square1XY, square2XY, tpos, xy, pm, board, activePlayer) {
  const capture1XY = [xy ? square1XY[0] + 1 : square1XY[0], xy ? square1XY[1] : square1XY[1] + 1];
  const capture2XY = [xy ? square1XY[0] - 1 : square1XY[0], xy ? square1XY[1] : square1XY[1] - 1];
  const square1P = board[square1XY[1]][square1XY[0]]
  const square2P = board[square2XY[1]][square2XY[0]]
  if (square1P === "") {
    pm.push([square1XY[0], square1XY[1], "valid-move"]);
    if ((tpos[xy] === 12 || tpos[xy] === 1) && square2P === "") {
      pm.push([square2XY[0], square2XY[1], "valid-move"]);
    }
  }
  if (capture1XY.every((coord) => coord >= 0 && coord < 14)) {
    const capture1P = board[capture1XY[1]][capture1XY[0]]
    if ([null, undefined, ""].every((e) => e !== capture1P) && capture1P.charAt(1) !== activePlayer) {
      pm.push([capture1XY[0], capture1XY[1], "capture-move"]);
    }
  }
  if (capture2XY.every((coord) => coord >= 0 && coord < 14)) {
    const capture2P = board[capture2XY[1]][capture2XY[0]]
    if ([null, undefined, ""].every((e) => e !== capture2P) && capture2P.charAt(1) !== activePlayer) {
      pm.push([capture2XY[0], capture2XY[1], "capture-move"]);
    }
  }
  return pm;
}
export function getNonCheckingMoves(xPos, yPos, board) {
  // For each possible move of the clicked piece
  let moves = [];
  for (const move of getMoves(xPos, yPos, board)) {
    // Create a board that represents what the board would look like if that move occured
    let testBoard = JSON.parse(JSON.stringify(board));
    testBoard[move[1]][move[0]] = board[yPos][xPos];
    testBoard[yPos][xPos] = "";

    let valid = true;

    // Loop through every square on the hypothetical board
    for (const [i, row] of testBoard.entries()) {
      for (const [j, square] of row.entries()) {
        // If there's a piece in the square
        if (square) {
          // Loop through the capturing moves it can make
          for (const capture of getMoves(j, i, testBoard).filter(move => move[2] === "capture-move")) {
            // If that capturing move could "capture" the king
            if (testBoard[capture[1]][capture[0]] === "K" + board[yPos][xPos].charAt(1)) {
              // Remove this move as a possible move
              valid = false;
            }
          }
        }
      }
    }
    if (valid) {
      moves.push(move);
    }
  }
  return moves;
}
export function getSquareAtPos(x, y) {
  return document.querySelector(`[data-pos="${x},${y}"]`);
}
