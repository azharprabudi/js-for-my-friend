const reverseRectangle = require("./index");

test("it should be return \n123\n12\1\n", () => {
  expect(reverseRectangle(3)).toEqual("\n123\n12\n1\n");
});

test("it should be return \n123456\n12345\n1234\n123\n12\1", () => {
  expect(reverseRectangle(3)).toEqual("\n123456\n12345\n1234\n123\n12\1");
});
