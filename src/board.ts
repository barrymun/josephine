import { Bitboard } from "./types";

// Example of initial bitboards for pawns
const whitePawnsInitial: Bitboard = BigInt("0x00FF000000000000"); // Starting row for white pawns
const blackPawnsInitial: Bitboard = BigInt("0x000000000000FF00"); // Starting row for black pawns

// Mapping squares to bit positions
export const getBitboardPosition = (row: number, column: number): Bitboard => {
  return BigInt(1) << BigInt(row * 8 + column);
}

// Check if a square is occupied by a white pawn
export const isSquareOccupiedByWhitePawn = (squareBitboard: Bitboard): boolean => {
  return (whitePawnsInitial & squareBitboard) !== BigInt(0);
}
