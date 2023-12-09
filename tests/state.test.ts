import { describe, it, expect } from "bun:test";

import { state } from "../src/state";

describe("test board", () => {
  it("test initBoard on start", () => {
    expect(state.board).toBeDefined();
  });
});
