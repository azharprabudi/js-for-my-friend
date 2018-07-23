/*

Buatlah sebuah fungsi yang dimana fungsi tersebut menerima sebuah parameter yang bernilai array, dan setiap value di dalam array tersebut merupakan integer.

Tugas anda adalah kembalikan array yang dipassing tersebut menjadi sebuah array yang dimana value di dalamnya di kalikan dengan angka 2, namun nilai pada array tersebut harus di balik, yang dimana posisinya seharusnya di depan, dan harus dibuat di belakang 

Contoh 1 :

taskArrayP2([1, 2, 3, 4, 5]);

akan mengembalikan nilai [10, 8, 6, 4, 2]; // reverse array

Contoh 2 :

taskArrayP2([11, 22, 33]);

akan mengembalikan nilai [66, 44, 22]; //reverse array

untuk mengecek hasilnya benar atau tidak jalankan command berikut di dalam directory project anda

npm run jest ./task/array/test-task-arrayy-p2/index.js
*/

const taskArrayP2 =arr => {
 let length = arr.length;
 let newArr = [] ;
 
 for ( var i = length ; i > 0 ; i--){
     newArr.push(arr[i-1] * 2);
 }
 return newArr;
};  

module.exports = taskArrayP2;
