const squareReverseValue = require("./index");

test("should be return \n654321\n654321\n654321\n654321\n654321\n654321\n", () => {
  expect(squareReverseValue(6)).toEqual(
    `654321\n654321\n654321\n654321\n654321\n654321\n`
  );
});
