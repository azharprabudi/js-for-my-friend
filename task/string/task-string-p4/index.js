/*

Terdapat sebuah fungsi yang menerima sebuah paramter n, tugas anda adalah untuk membuat segitiga siku siku, yang dimana jumlah barisnya = n dan setiap barisnya dimulai dari
angka 1 - n

Contoh :

rectangle(3);

1
12
123

To run this test just paste this command to your cli

npm run test ./task/string/task-string-p4/test.js

happy coding

*/

const rectangle = n => {
  let tmp = "";

  for ( let i = 0 ; i<=n ; i++){
    for ( let j = 1 ; j<=i ; j++){
    tmp += j;
    }
    tmp +="\n";
  }
  return tmp;
};

module.exports = rectangle;
