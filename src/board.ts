import { knightBitboard, knightPositionOffsets } from "./pieces";
import { Bitboard, ChessBoard } from "./types";

export let board: ChessBoard;

export const initBoard = () => {
  board = {
    // kings initially on e1 and e8
    whiteKing: BigInt("0x0800000000000000"),
    // queens initially on d1 and d8
    whiteQueens: BigInt("0x1000000000000000"),
    // rooks initially on a1, h1, a8, and h8
    whiteRooks: BigInt("0x8100000000000000"),
    // bishops initially on c1, f1, c8, and f8
    whiteBishops: BigInt("0x2400000000000000"),
    // knights initially on b1, g1, b8, and g8
    whiteKnights: BigInt("0x4200000000000000"),
    // pawns initially on the 2nd and 7th ranks
    whitePawns: BigInt("0x00FF000000000000"),
    // black pieces mirror white's setup
    blackKing: BigInt("0x0000000000000008"),
    blackQueens: BigInt("0x0000000000000010"),
    blackRooks: BigInt("0x0000000000000081"),
    blackBishops: BigInt("0x0000000000000024"),
    blackKnights: BigInt("0x0000000000000042"),
    blackPawns: BigInt("0x000000000000FF00"),
    // game state variables
    isWhiteTurn: true, // white starts the game
    castlingRights: 0b1111, // all castling rights available initially
    enPassantSquare: null, // no en passant square initially
  };
};

// Helper function to map row and column to bitboard position
const getBitboardPosition = (row: number, column: number): Bitboard => {
  return BigInt(1) << BigInt(row * 8 + column);
};

// const evaluatePositionGivenOffsets = (positionOffsets: number[]) => {
//   let score = 0;
//   for (let i = 0; i < 64; i++) {
//     if ((knightBitboard & (BigInt(1) << BigInt(i))) !== BigInt(0)) {
//       score += positionOffsets[i];
//     }
//   }
//   return score;
// };
// const evaluatePositionGivenOffsets = (bitboard: bigint, positionOffsets: number[]): number => {
//   let score = 0;
//   console.log("===START===");
//   while (bitboard) {
//     // Extract the index of the least significant bit that is set
//     const bitIndex = Math.log2(Number(bitboard & -bitboard));
//     score += positionOffsets[bitIndex];
//     console.log(score);

//     // Clear the least significant bit that is set
//     bitboard &= bitboard - BigInt(1);
//   }
//   console.log("===END===");
//   return score;
// };
const evaluatePositionGivenOffsets = (bitboard: bigint, positionOffsets: number[], baseValue: number): number => {
  let score = 0;
  for (let i = 0; i < 64; i++) {
    if ((bitboard & (BigInt(1) << BigInt(i))) !== BigInt(0)) {
      score += baseValue + positionOffsets[i]; // adjust the base value by the offset
    }
  }
  return score;
};

export const evaluateBoard = () => {
  // Piece values
  const pawnValue = 1;
  const knightBishopValue = 3;
  const rookValue = 5;
  const queenValue = 9;
  const winValue = 1000;

  // Count the bits set in a bitboard
  const countBits = (bitboard: Bitboard): number => {
    let count = 0;
    while (bitboard) {
      count += Number(bitboard & BigInt(1));
      bitboard >>= BigInt(1);
    }
    return count;
  };

  // Evaluate material
  let score = 0;
  score += countBits(board.whitePawns) * pawnValue;
  console.log({ score });
  score += evaluatePositionGivenOffsets(board.whiteKnights, knightPositionOffsets, knightBishopValue);
  console.log({ score });
  score += countBits(board.whiteBishops) * knightBishopValue;
  console.log({ score });
  score += countBits(board.whiteRooks) * rookValue;
  score += countBits(board.whiteQueens) * queenValue;
  console.log({ x: score });
  score -= countBits(board.blackPawns) * pawnValue;
  console.log({ score });
  score -= evaluatePositionGivenOffsets(board.blackKnights, knightPositionOffsets, knightBishopValue);
  console.log({ score });
  score -= countBits(board.blackBishops) * knightBishopValue;
  score -= countBits(board.blackRooks) * rookValue;
  score -= countBits(board.blackQueens) * queenValue;
  console.log({ score });

  // Check for win/loss
  // This is a simplification; in a real scenario, you would need to check for actual checkmate or draw conditions
  if (board.whiteKing === BigInt(0)) return -winValue; // Black wins
  if (board.blackKing === BigInt(0)) return winValue;  // White wins

  // Draw not considered in this basic implementation
  // In a real scenario, you'd check for draw conditions like stalemate, insufficient material, etc.

  return score;
};
