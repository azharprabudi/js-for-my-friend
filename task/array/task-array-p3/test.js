const taskArray3 = require("./index");

test("TEST 1 - should be return the value [-1, 11] from array [5,3,2,0,-1,11]", () => {
  expect(taskArray3([5, 3, 2, 0, -1, 11])).toEqual([-1, 11]);
});

test("TEST 2 - should be return the value [0, 0] from array [0,0,0,0,0,0]", () => {
  expect(taskArray3([0, 0, 0, 0, 0, 0])).toEqual([0, 0]);
});
