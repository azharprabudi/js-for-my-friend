/*

Destructor array merupakan sebuah fungsi yang terdapat pada javascript yang sudah menggunakan gaya penulisan es6, yang tujuannya adalah menambahkan value baru ke dalam sebuah array baru yang dimana array sebelumnya dipecah di dalam array baru

contoh:

let oldArray = [1, 2, 3];
let newArray = [...oldArray, 4]; // [1, 2, 3, 4]


*/

const learnDesctructorArray = () => {
  let oldArray = [1, 2, 3];
  let newArray = [...oldArray, 4];
  newArray = [...newArray, 5];

  console.log(newArray);
  return newArray;
};

learnDesctructorArray();

module.exports = learnDesctructorArray;
