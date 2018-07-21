/*

constructor pada class merupakan sebuah fungsi yang akan dipanggil ketika sebuah class tersebut dibuat, tujuannya biasanya adalah untuk menyimpan beberapa nilai yang nantinya kemungkinan diakses oleh beberapa method

*/

const has = require("lodash/has");

class MemberOsis {
  constructor(biodata) {
    this.biodata = { ...biodata };
  }

  getMyName() {
    if (has(this.biodata, "name")) {
      return this.biodata.name;
    }
    return "the object doest have property name";
  }

  setName(newName) {
    this.biodata.name = newName;
  }
}

const mOsisMember = new MemberOsis({ name: "James", gender: "L" });
const himName = mOsisMember.getMyName();

console.log(`him name is: ${himName}`);

module.exports = MemberOsis;
