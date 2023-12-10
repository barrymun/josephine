import { knightBishopValue, pawnValue, queenValue, rookValue, winValue } from "config";
import {
  bishopPositionOffsets,
  kingPositionOffsets,
  knightPositionOffsets,
  pawnPositionOffsets,
  queenPositionOffsets,
  rookPositionOffsets,
} from "pieces";
import { ChessBoard, Player } from "types";

export const evaluatePositionGivenOffsets = ({
  bitboard,
  positionOffsets,
  baseValue,
  player,
}: {
  bitboard: bigint;
  positionOffsets: number[];
  baseValue: number;
  player: Player;
}): number => {
  let score = 0;
  while (bitboard) {
    const index = Math.log2(Number(bitboard & -bitboard));
    score += baseValue + positionOffsets[index];

    // Clear the least significant bit that is set
    bitboard &= bitboard - BigInt(1);
  }
  if (player === "black") {
    score *= -1;
  }
  return Math.round(score * 100) / 100;
};

export const evaluateBoard = (board: ChessBoard) => {
  // evaluate material
  let score = 0;
  // white
  score += evaluatePositionGivenOffsets({
    bitboard: board.whitePawns,
    positionOffsets: pawnPositionOffsets,
    baseValue: pawnValue,
    player: "white",
  });
  score += evaluatePositionGivenOffsets({
    bitboard: board.whiteKnights,
    positionOffsets: knightPositionOffsets,
    baseValue: knightBishopValue,
    player: "white",
  });
  score += evaluatePositionGivenOffsets({
    bitboard: board.whiteBishops,
    positionOffsets: bishopPositionOffsets,
    baseValue: knightBishopValue,
    player: "white",
  });
  score += evaluatePositionGivenOffsets({
    bitboard: board.whiteRooks,
    positionOffsets: rookPositionOffsets,
    baseValue: rookValue,
    player: "white",
  });
  score += evaluatePositionGivenOffsets({
    bitboard: board.whiteQueens,
    positionOffsets: queenPositionOffsets,
    baseValue: queenValue,
    player: "white",
  });
  score += evaluatePositionGivenOffsets({
    bitboard: board.whiteKing,
    positionOffsets: kingPositionOffsets,
    baseValue: 0, // TODO: might assign a different weight for the king
    player: "white",
  });
  // black
  score += evaluatePositionGivenOffsets({
    bitboard: board.blackPawns,
    positionOffsets: pawnPositionOffsets.toReversed(),
    baseValue: pawnValue,
    player: "black",
  });
  score += evaluatePositionGivenOffsets({
    bitboard: board.blackKnights,
    positionOffsets: knightPositionOffsets.toReversed(),
    baseValue: knightBishopValue,
    player: "black",
  });
  score += evaluatePositionGivenOffsets({
    bitboard: board.blackBishops,
    positionOffsets: bishopPositionOffsets.toReversed(),
    baseValue: knightBishopValue,
    player: "black",
  });
  score += evaluatePositionGivenOffsets({
    bitboard: board.blackRooks,
    positionOffsets: rookPositionOffsets.toReversed(),
    baseValue: rookValue,
    player: "black",
  });
  score += evaluatePositionGivenOffsets({
    bitboard: board.blackQueens,
    positionOffsets: queenPositionOffsets.toReversed(),
    baseValue: queenValue,
    player: "black",
  });
  score += evaluatePositionGivenOffsets({
    bitboard: board.blackKing,
    positionOffsets: kingPositionOffsets.toReversed(),
    baseValue: 0, // TODO: might assign a different weight for the king
    player: "black",
  });

  // round the score to a reasonable precision, e.g., two decimal places
  score = Math.round(score * 100) / 100;
  console.log({ score });

  // Check for win/loss
  // This is a simplification; in a real scenario, you would need to check for actual checkmate or draw conditions
  if (board.whiteKing === BigInt(0)) return -winValue; // Black wins
  if (board.blackKing === BigInt(0)) return winValue; // White wins

  // Draw not considered in this basic implementation
  // In a real scenario, you'd check for draw conditions like stalemate, insufficient material, etc.

  return score;
};
