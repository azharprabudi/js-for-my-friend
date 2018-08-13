const belahKetupat = require("./index");

test("should be return true", () => {
  expect(belahKetupat(5)).toEqual("  *  \n * * \n*   *\n * * \n  *  \n");
});
