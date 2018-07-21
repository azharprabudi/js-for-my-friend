/*

Buatlah sebuah fungsi yang dimana fungsi tersebut menerima sebuah parameter yang bernilai array, dan setiap value di dalam array tersebut merupakan integer.

Tugas anda adalah kembalikan array yang dipassing tersebut menjadi sebuah array yang dimana value di dalamnya di kalikan dengan angka 2. 

Contoh :

taskArrayP1([1, 2, 3, 4, 5]);

akan mengembalikan nilai [2, 4, 6, 8, 10];


untuk mengecek hasilnya benar atau tidak jalankan command berikut di dalam directory project anda

npm run test ./task/array/task-array-p1/test-task-array-p1.js

*/


const taskArrayP1 = (arr) => {
    let length = arr.length;
    
    for (var i = 0; i < length; i++) {
        
        // cara ke 1
        arr[i] = arr[i] * 2;
        
        // cara ke 2
        // newArr.push(arr[i] * 2);
    
        // cara ke 3
        // newArr = newArr.concat(arr[i] * 2);
    }

    return arr;
};


module.exports = taskArrayP1;
