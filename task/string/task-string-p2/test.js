const square = require("./index");

// test("should be return \n123456\n123456\n123456\n123456\n123456\n123456\n", () => {
//   expect(square(6)).toEqual(`123456\n123456\n123456\n123456\n123456\n123456\n`);
// });

test("should be return \n654321\n654321\n654321\n654321\n654321\n654321\n", () => {
  expect(square(6)).toEqual(`654321\n654321\n654321\n654321\n654321\n654321\n`);
});
