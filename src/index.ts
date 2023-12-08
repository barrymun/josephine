import { getBitboardPosition, isSquareOccupiedByWhitePawn } from "./board";
import { createSimpleChessPosition } from "./helpers";
import { minimax } from "./minimax";

// const initialPosition = createSimpleChessPosition(0, false);
// const result = minimax({
//   position: initialPosition,
//   depth: 3,
//   maximizingPlayer: true
// });

// console.log({ result });

// Example of checking a square
const square = getBitboardPosition(6, 4); // Representing the square at row 6, column 4
console.log(isSquareOccupiedByWhitePawn(square)); // Will return true if a white pawn is on this square
