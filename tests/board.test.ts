import { describe, it, expect } from 'bun:test';

import { board, evaluatePositionGivenOffsets, initBoard } from '../src/board';
import { knightPositionOffsets } from '../src/pieces';
import { knightBishopValue } from '../src/constants';

initBoard();

describe('evaluatePositionGivenOffsets', () => {
  it('calculate score for knights in opening position', () => {
    const score = evaluatePositionGivenOffsets(board.whiteKnights, knightPositionOffsets, knightBishopValue);
    // Use Bun's expect function to assert that the actual score matches the expected score
    expect(score).toEqual(5.2);
  });
});
