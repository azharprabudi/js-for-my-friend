const taskArrayP1 = require("./index");

test("the value has to be [2, 4, 6, 8, 10]", () => {
  expect(taskArrayP1([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
});

test("the value has to be [42, 18, 16, 22, 12]", () => {
  expect(taskArrayP1([21, 9, 8, 11, 6])).toEqual([42, 18, 16, 22, 12]);
});
