import { convertOffsetsToBitboard } from "./helpers";

export const knightPositionOffsets: number[] = [
  -0.5, -0.4, -0.4, -0.4, -0.4, -0.4, -0.4, -0.5,
  -0.4,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.4,
  -0.4,  0.0,  0.25, 0.25, 0.25, 0.25, 0.0, -0.4,
  -0.4,  0.0,  0.25, 0.25, 0.25, 0.25, 0.0, -0.4,
  -0.4,  0.0,  0.25, 0.25, 0.25, 0.25, 0.0, -0.4,
  -0.4,  0.0,  0.25, 0.25, 0.25, 0.25, 0.0, -0.4,
  -0.4,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.4,
  -0.5, -0.4, -0.4, -0.4, -0.4, -0.4, -0.4, -0.5
];

export const knightBitboard = convertOffsetsToBitboard(knightPositionOffsets);
