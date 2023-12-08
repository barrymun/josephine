import { describe, it, expect } from 'bun:test';

import { board, evaluatePositionGivenOffsets, initBoard } from '../src/board';
import { knightPositionOffsets } from '../src/pieces';
import { knightBishopValue } from '../src/constants';

initBoard();

describe('evaluatePositionGivenOffsets', () => {
  it('calculate score for white knights in opening position', () => {
    const score = evaluatePositionGivenOffsets({
      bitboard: board.whiteKnights,
      positionOffsets: knightPositionOffsets,
      baseValue: knightBishopValue,
      player: 'white',
    });
    // Use Bun's expect function to assert that the actual score matches the expected score
    expect(score).toEqual(5.2);
  });

  it('calculate score for black knights in opening position', () => {
    const score = evaluatePositionGivenOffsets({
      bitboard: board.blackKnights,
      positionOffsets: knightPositionOffsets,
      baseValue: knightBishopValue,
      player: 'black',
    });
    expect(score).toEqual(-5.2);
  });
});
