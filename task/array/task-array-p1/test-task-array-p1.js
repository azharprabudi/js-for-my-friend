const taskArrayP1 = require("./task-array-p1");

expect("the value has to be [2, 4, 6, 8, 10]", () => {
  taskArrayP1([1, 2, 3, 4, 5]);
});

expect("the value has to be [42, 18, 16, 22, 12]", () => {
  taskArrayP1([21, 9, 8, 11, 6]);
});
