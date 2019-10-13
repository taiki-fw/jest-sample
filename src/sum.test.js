const sum = require("./sum.js");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2, true)).toBe(3);
});

test("adds 3 + 5 to equal 8", () => {
  expect(sum(3, 5, true)).toBe(8);
});

test("adds 3 * 5 to equal 15", () => {
  expect(sum(3, 5, false)).toBe(15);
});
