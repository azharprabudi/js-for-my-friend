const rectangle = require("./index");

test("it should be return \n1\n12\n123\n", () => {
  expect(rectangle(3)).toEqual("\n1\n12\n123\n");
});

test("it should be return \n1\n12\n123\n1234\n12345\123456", () => {
  expect(rectangle(3)).toEqual("\n1\n12\n123\n1234\n12345\123456");
});
