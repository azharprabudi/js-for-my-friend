/*

Terdapat sebuah fungsi yang menerima sebuah paramter n, tugas anda adalah untuk membuat segitiga siku siku dengan posisi terbalik, yang dimana jumlah barisnya = n dan setiap barisnya dimulai dari
angka 1 - n

Contoh :

rectangle(3);

123
12
1

To run this test just paste this command to your cli

npm run test ./task/string/task-string-p5/test.js

happy coding

*/

const reverseRectangle = n => {
  let tmp ="";

  for (let i=0; i<n; i++){
    for(let j=1; j<=n-i ; j++){
     tmp += j;
    }
    tmp +="\n";
  }
  return tmp;
};

module.exports = reverseRectangle;
