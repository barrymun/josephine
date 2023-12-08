export type ChessPosition = {
  evaluate: () => number;
  isTerminal: () => boolean;
  children: () => ChessPosition[];
}

export type Bitboard = bigint; // Using bigint for 64-bit integer
