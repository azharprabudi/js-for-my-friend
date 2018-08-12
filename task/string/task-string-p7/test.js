const jajarGenjang = require("./index");

test("should return true", () => {
  expect(jajarGenjang(3, 5, 3)).toEqual("  ***\n *** \n***  \n");
});
