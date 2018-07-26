const findName = require("./index");

test("Should be return KETEMU", () => {
  expect(
    findName(
      [
        "zahra asri septia",
        "nur agustin",
        "fernanda racmadini",
        "ade ayu andini"
      ],
      "ade ayu andini"
    )
  ).toEqual("KETEMU");
});

test("Should be return TIDAK KETEMU", () => {
  expect(
    findName(["satu", "tusatu", "tusatuduatiga", "tigaduasatudua"], "dua")
  ).toEqual("TIDAK KETEMU");
});
