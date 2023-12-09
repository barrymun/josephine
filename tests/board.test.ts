import { describe, it, expect } from 'bun:test';

import { board, evaluatePositionGivenOffsets, initBoard } from '../src/board';
import { 
  pawnPositionOffsets,
  knightPositionOffsets,
  bishopPositionOffsets,
  rookPositionOffsets,
  queenPositionOffsets,
  kingPositionOffsets,
} from '../src/pieces';
import { 
  pawnValue,
  knightBishopValue,
  rookValue,
  queenValue,
  winValue, // TODO:
} from '../src/constants';

initBoard();

describe('test evaluatePositionGivenOffsets for white pieces', () => {
  it('calculate score for white pawns in opening position', () => {
    const score = evaluatePositionGivenOffsets({
      bitboard: board.whitePawns,
      positionOffsets: pawnPositionOffsets,
      baseValue: pawnValue,
      player: 'white',
    });
    expect(score).toEqual(8.2);
  });

  it('calculate score for white knights in opening position', () => {
    const score = evaluatePositionGivenOffsets({
      bitboard: board.whiteKnights,
      positionOffsets: knightPositionOffsets,
      baseValue: knightBishopValue,
      player: 'white',
    });
    expect(score).toEqual(5.2);
  });

  it('calculate score for white bishops in opening position', () => {
    const score = evaluatePositionGivenOffsets({
      bitboard: board.whiteBishops,
      positionOffsets: bishopPositionOffsets,
      baseValue: knightBishopValue,
      player: 'white',
    });
    expect(score).toEqual(6.2);
  });

  it('calculate score for white rooks in opening position', () => {
    const score = evaluatePositionGivenOffsets({
      bitboard: board.whiteRooks,
      positionOffsets: rookPositionOffsets,
      baseValue: rookValue,
      player: 'white',
    });
    expect(score).toEqual(10.0);
  });

  it('calculate score for white queens in opening position', () => {
    const score = evaluatePositionGivenOffsets({
      bitboard: board.whiteQueens,
      positionOffsets: queenPositionOffsets,
      baseValue: queenValue,
      player: 'white',
    });
    expect(score).toEqual(9.2);
  });

  it('calculate score for white king in opening position', () => {
    const score = evaluatePositionGivenOffsets({
      bitboard: board.whiteKing,
      positionOffsets: kingPositionOffsets,
      baseValue: 0,
      player: 'white',
    });
    expect(score).toEqual(0.1);
  });
});

describe('test evaluatePositionGivenOffsets for black pieces', () => {
  it('calculate score for black pawns in opening position', () => {
    const score = evaluatePositionGivenOffsets({
      bitboard: board.blackPawns,
      positionOffsets: pawnPositionOffsets,
      baseValue: pawnValue,
      player: 'black',
    });
    expect(score).toEqual(-9.4);
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

  it('calculate score for black bishops in opening position', () => {
    const score = evaluatePositionGivenOffsets({
      bitboard: board.blackBishops,
      positionOffsets: bishopPositionOffsets,
      baseValue: knightBishopValue,
      player: 'black',
    });
    expect(score).toEqual(-6.2);
  });

  it('calculate score for black rooks in opening position', () => {
    const score = evaluatePositionGivenOffsets({
      bitboard: board.blackRooks,
      positionOffsets: rookPositionOffsets,
      baseValue: rookValue,
      player: 'black',
    });
    expect(score).toEqual(-10.0);
  });

  it('calculate score for black queens in opening position', () => {
    const score = evaluatePositionGivenOffsets({
      bitboard: board.blackQueens,
      positionOffsets: queenPositionOffsets,
      baseValue: queenValue,
      player: 'black',
    });
    expect(score).toEqual(-9.2);
  });

  it('calculate score for black king in opening position', () => {
    const score = evaluatePositionGivenOffsets({
      bitboard: board.blackKing,
      positionOffsets: kingPositionOffsets,
      baseValue: 0,
      player: 'black',
    });
    expect(score).toEqual(-0.1);
  });
});
