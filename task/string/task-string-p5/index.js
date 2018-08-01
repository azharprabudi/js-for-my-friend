/*
 
Buatlah sebuah fungsi yang dimana menerima inputan string, yang tujuannya mengubah posisi setiap huruf yang terdapat dalam string tersebut, dengan contoh sbb:

Contoh 1 :

Terdapat kata "azhar", yang apabila menjalakan fungsi tersebut menjadi "arzah"

Contoh 2 :

Terdapat kata "zliu", yang apabila menjalankan fungis tersebut menjadi "zuli"

Clue :
1. Gunakan looping untuk kasus ini, dan temukan looping mana yang cocok untuk digunakan diantara (for, while, do while)
2. Gunakan charAt untuk mengakses setiap huruf yang berada dalam kata, contoh var name = "zuli" => name.charAt(0) // akan menghasilkan z

Untuk menjalankan testnya gunakan command berikut :

npm run jest ./task/string/task-string-p5/test.js

Happy Coding
*/

const reverseString = str => {

let length = str.length;
let tmp = "";
let kiri = 0;
let kanan = length - 1; //3

while (kiri <= kanan){
        
       
        if ( kanan == kiri){
            tmp += str.charAt(kiri);
        }
        else{
            tmp += str.charAt(kiri); 
            tmp += str.charAt(kanan);
        }
        kiri++;
        kanan--;

}
return tmp;
};

module.exports = reverseString;
