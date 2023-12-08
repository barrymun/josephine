import { Bitboard, ChessBoard } from "./types";

export let board: ChessBoard;

export const initChessBoard = () => {
  board = {
    // kings initially on e1 and e8
    whiteKing: BigInt("0x0800000000000000"),
    // queens initially on d1 and d8
    whiteQueens: BigInt("0x1000000000000000"),
    // rooks initially on a1, h1, a8, and h8
    whiteRooks: BigInt("0x8100000000000000"),
    // bishops initially on c1, f1, c8, and f8
    whiteBishops: BigInt("0x2400000000000000"),
    // knights initially on b1, g1, b8, and g8
    whiteKnights: BigInt("0x4200000000000000"),
    // pawns initially on the 2nd and 7th ranks
    whitePawns: BigInt("0x00FF000000000000"),
    // black pieces mirror white's setup
    blackKing: BigInt("0x0000000000000008"),
    blackQueens: BigInt("0x0000000000000010"),
    blackRooks: BigInt("0x0000000000000081"),
    blackBishops: BigInt("0x0000000000000024"),
    blackKnights: BigInt("0x0000000000000042"),
    blackPawns: BigInt("0x000000000000FF00"),
    // game state variables
    isWhiteTurn: true, // white starts the game
    castlingRights: 0b1111, // all castling rights available initially
    enPassantSquare: null, // no en passant square initially
  };
};

// Helper function to map row and column to bitboard position
const getBitboardPosition = (row: number, column: number): Bitboard => {
  return BigInt(1) << BigInt(row * 8 + column);
}
