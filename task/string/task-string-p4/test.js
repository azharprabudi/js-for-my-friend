const rectangle = require("./index");

test("should be return \n1\n12\n123\n", () => {
  expect(rectangle(3)).toEqual(`\n1\n12\n123\n`);
});


test("should be return \n1\n12\n123\n1234\n12345\n123456\n", () => {
  expect(rectangle(6)).toEqual(`\n1\n12\n123\n1234\n12345\n123456\n`);
});

