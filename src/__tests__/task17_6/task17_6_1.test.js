import { revertString } from "../../task17_6/task17_6_1.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});