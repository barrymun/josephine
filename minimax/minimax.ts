export const minimax = ({
  position, depth, maximizingPlayer
}: {
  position: any;
  depth: number;
  maximizingPlayer: boolean;
}) => {
  if (depth === 0 || position.isTerminal()) {
    return position.evaluate();
  }
  if (maximizingPlayer) {
    let bestValue = -Infinity;
    for (let child of position.children()) {
      let value = minimax({
        position: child,
        depth: depth - 1,
        maximizingPlayer: false
      });
      bestValue = Math.max(bestValue, value);
    }
    return bestValue;
  }
  else {
    let bestValue = Infinity;
    for (let child of position.children()) {
      let value = minimax({
        position: child,
        depth: depth - 1,
        maximizingPlayer: true
      });
      bestValue = Math.min(bestValue, value);
    }
    return bestValue;
  }
};
