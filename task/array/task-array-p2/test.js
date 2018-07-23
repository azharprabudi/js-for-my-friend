const taskArrayP2 = require("./index");

test("the value has to be [10, 8, 6, 4, 2]", () => {
  expect(taskArrayP2([1, 2, 3, 4, 5])).toEqual([10, 8, 6, 4, 2]);
});

test("the value has to be [12, 22, 16, 18, 42]", () => {
  expect(taskArrayP2([21, 9, 8, 11, 6])).toEqual([12, 22, 16, 18, 42]);
});




