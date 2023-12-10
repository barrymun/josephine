import { evaluateBoard } from "board";
import { state } from "state";

const run = () => {
  console.log(state.board.whitePawns);
  console.log(evaluateBoard(state.board));
};
run();
