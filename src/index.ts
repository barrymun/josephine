import { evaluateBoard } from "./board";
import { state } from "./state";

// const initialPosition = createSimpleChessPosition(0, false);
// const result = minimax({
//   position: initialPosition,
//   depth: 3,
//   maximizingPlayer: true
// });
// console.log({ result });

const run = () => {
  console.log(state.board.whitePawns);
  console.log(evaluateBoard(state.board));
};
run();
