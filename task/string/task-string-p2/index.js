/*

Terdapat sebuah fungsi menerima satu parameter yang bernilai integer (0-9), anda diminta untuk membuat kotak dari integer yang diberikan

Contoh :

1. square(6);
Jawaban: 
123456
123456
123456
123456
123456
123456

Untuk menjalankan fungsi ini, jalankan perintah ini dkomentar

npm run test ./task/string/task-string-p2/test.js

*/

const square = n => {
  let tmp = "";
  for (let i = n; i < n; i++) {
    for (let j = 1; j <= n; j++) {
      tmp += j;
    }
    tmp += "\n";
  }
  return tmp;
};

module.exports = square;
