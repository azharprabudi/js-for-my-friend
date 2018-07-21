/*

splice merupakan fungsi dari javascript yang dapat digunakan untuk variabel
yang memiliki nilai sebuah array, tujuan dari fungsi slice ini untuk menambahkan
sebuah nilai sesudah atau sebelum pada index tertentu.

slice(index ke berapa, berapa banyak yang ingin di ambil, data apa yang akan ditambahkan);


contoh:
let arr = [1,2,3,4,5];
arr.splice(0, 0, 5); // [1, 5, 2, 3, 4, 5];

ketika menggunakan slice dan menampungnya ke dalam sebuah variabel, maka dia akan mengembalikan banyaknya nilai yang akan kita ambil

contoh:
let arr = [10, 9, 8, 7, 5];
let tmp = arr.splice(3, 1, 100, 99);

tmp  =>  [7]
arr => [10, 9, 8, 100, 99, 5]
*/

const learnSplice = () => {
  let arr = [1, 2, , 3, 4, 5];
  arr.splice(3, 2, 1, 2, 3);

  console.log(arr);
  return arr;
};

module.exports = learnSplice;
