export type ChessPosition = {
  evaluate: () => number;
  isTerminal: () => boolean;
  children: () => ChessPosition[];
}
