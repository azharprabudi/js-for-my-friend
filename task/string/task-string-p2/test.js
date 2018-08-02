const square = require("./index");

test("should be return \n123456\n123456\n123456\n123456\n123456\n123456\n", () => {
  expect(square(6)).toEqual(`123456\n123456\n123456\n123456\n123456\n123456\n`);
});
