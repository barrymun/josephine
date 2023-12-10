import { evaluateBoard } from "evaluation";
import { state } from "state";

const run = () => {
  console.log(state.board.whitePawns);
  console.log(evaluateBoard(state.board));
};
run();
