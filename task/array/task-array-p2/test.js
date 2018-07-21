const taskArrayP1 = require("./task-array-p1");

expect("the value has to be [10, 8, 6, 4, 2]", () => {
  taskArrayP1([1, 2, 3, 4, 5]);
});

expect("the value has to be [12, 22, 16, 18, 42]", () => {
  taskArrayP1([21, 9, 8, 11, 6]);
});
