/*

Push merupakan sebuah fungsi yang terdapat di dalam javascript, yang sering digunakan di dalam sebuah variabel yang memiliki nilai array. Tujuan utama dari fungsi push yaitu,
untuk menambahkan nilai ke dalam array tanpa perlu menentukan indexnya

contoh kode :
let array = [5, 4, 3, 1];
array.push(2); // maka saat ini array akan memiliki nilai [5, 4, 3, 1, 2];

*/

const learnPush = () => {
  let nilaiSayaSemester6 = [60, 30, 40];

  nilaiSayaSemester6.push(100);

  console.log(nilaiSayaSemester6);
  return nilaiSayaSemester6;
};

learnPush();

module.exports = learnPush;
