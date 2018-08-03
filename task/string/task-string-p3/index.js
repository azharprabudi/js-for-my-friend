/*

Terdapat sebuah fungsi menerima satu parameter yang bernilai integer (0-9), anda diminta untuk membuat kotak dari integer yang diberikan, yang dimana setiap baris dimulai dari angka yang bernilai parameter

Contoh :

1. square(6);
Jawaban: 
654321
654321
654321
654321
654321
654321

Untuk menjalankan fungsi ini, jalankan perintah ini dkomentar

npm run test ./task/string/task-string-p3/test.js

*/

const squareReverseValue = n => {
  let tmp = "";

  for (let i = n; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      tmp += j;
    }
    tmp += "\n";
  }
  return tmp;
};

module.exports = squareReverseValue;
