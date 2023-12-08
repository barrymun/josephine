import { ChessPosition } from "./types";

export const convertOffsetsToBitboard = (offsets: number[]) => {
  let bitboard = BigInt(0);
  for (let i = 0; i < offsets.length; i++) {
    if (offsets[i] > 0) {
      bitboard |= BigInt(1) << BigInt(i);
    }
  }
  return bitboard;
};

export const createSimpleChessPosition = (value: number, terminal: boolean): ChessPosition => {
  return {
    evaluate: () => value,
    isTerminal: () => terminal,
    children: () => {
      if (!terminal) {
        return [
          createSimpleChessPosition(value + Math.random(), false),
          createSimpleChessPosition(value - Math.random(), false)
        ];
      }
      return [];
    }
  };
};
