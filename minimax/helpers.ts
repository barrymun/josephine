import { ChessPosition } from "./types";

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
}
