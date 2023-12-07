import { createSimpleChessPosition } from "./helpers";
import { minimax } from "./minimax";

const initialPosition = createSimpleChessPosition(0, false);
const result = minimax({
  position: initialPosition,
  depth: 3,
  maximizingPlayer: true
});

console.log({ result });
