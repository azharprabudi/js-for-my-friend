const doubleRectangle = require("./index");

test("should return true", () => {
  expect(
    doubleRectangle(11, 6)).toEqual(
      "123456\n12345\n1234\n123\n12\n1\n12\n123\n1234\n12345\n123456\n"
    )
});
