export type ChessPosition = {
  evaluate: () => number;
  isTerminal: () => boolean;
  children: () => ChessPosition[];
}

export type Bitboard = bigint; // Using bigint for 64-bit integer

export interface ChessBoard {
  whiteKing: Bitboard;
  whiteQueens: Bitboard;
  whiteRooks: Bitboard;
  whiteBishops: Bitboard;
  whiteKnights: Bitboard;
  whitePawns: Bitboard;
  blackKing: Bitboard;
  blackQueens: Bitboard;
  blackRooks: Bitboard;
  blackBishops: Bitboard;
  blackKnights: Bitboard;
  blackPawns: Bitboard;
  isWhiteTurn: boolean;
  castlingRights: number; // 4 bits: KQkq
  enPassantSquare: number | null; // Square index or null
}
