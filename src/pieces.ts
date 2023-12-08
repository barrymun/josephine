import { convertOffsetsToBitboard } from "./helpers";

export const knightPositionOffsets: number[] = [
  -0.5, -0.4, -0.4, -0.4, -0.4, -0.4, -0.4, -0.5,
  -0.4, -0.2,  0.0,  0.0,  0.0,  0.0, -0.2, -0.4,
  -0.4,  0.0,  0.10, 0.2,  0.2,  0.10, 0.0, -0.4,
  -0.4,  0.0,  0.25, 0.25, 0.25, 0.25, 0.0, -0.4,
  -0.4,  0.0,  0.25, 0.25, 0.25, 0.25, 0.0, -0.4,
  -0.4,  0.0,  0.10, 0.2,  0.2,  0.10, 0.0, -0.4,
  -0.4, -0.2,  0.0,  0.0,  0.0,  0.0, -0.2, -0.4,
  -0.5, -0.4, -0.4, -0.4, -0.4, -0.4, -0.4, -0.5,
];

export const knightBitboard = convertOffsetsToBitboard(knightPositionOffsets);
