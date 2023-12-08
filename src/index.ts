import { board, initChessBoard } from "./board";

// const initialPosition = createSimpleChessPosition(0, false);
// const result = minimax({
//   position: initialPosition,
//   depth: 3,
//   maximizingPlayer: true
// });
// console.log({ result });

const run = () => {
  initChessBoard();
  console.log(board.whitePawns);
};
run();
