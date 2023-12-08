import { board, evaluateBoard, initBoard } from "./board";

// const initialPosition = createSimpleChessPosition(0, false);
// const result = minimax({
//   position: initialPosition,
//   depth: 3,
//   maximizingPlayer: true
// });
// console.log({ result });

const run = () => {
  initBoard();
  console.log(board.whitePawns);
  console.log(evaluateBoard());
};
run();
