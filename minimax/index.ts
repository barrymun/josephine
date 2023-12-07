import { minimax } from "./minimax";

const result = minimax({
  position: {
    isTerminal: () => false,
    evaluate: () => 0,
    children: () => []
  },
  depth: 3,
  maximizingPlayer: true
});

console.log({ result });
