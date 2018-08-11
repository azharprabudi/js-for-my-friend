const makeRectangle = require("./index");

test("i will pass number 6 to the function", () => {
  expect(makeRectangle(6)).toEqual(
    "******\n*    *\n*    *\n*    *\n*    *\n******\n"
  );
});

test("i will pass number 3 to the function", () => {
  expect(makeRectangle(3)).toEqual("***\n* *\n***\n");
});

test("i will pass number 2 to the function", () => {
  expect(makeRectangle(2)).toEqual("**\n**\n");
});
