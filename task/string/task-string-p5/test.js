const reverseString = require("./index");

test("Should be return ", () => {
  expect(reverseString("zliu")).toEqual("zuli");
});

test("Should be return ", () => {
  expect(reverseString("azhar")).toEqual("arzah");
});
