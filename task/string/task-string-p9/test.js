const makeRectangle = require("./index");

test("i will pass number 7 to the function", () => {
  expect(makeRectangle(7)).toEqual(
    "*******\n*  *  *\n*  *  *\n*  *  *\n*  *  *\n*  *  *\n*******\n"
  );
});
