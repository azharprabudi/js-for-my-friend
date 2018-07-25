/*

Terdapat sebuah fungsi yang menerima 1 parameter dengan tipe data Array, tugas anda adalah diminta untuk mengembalikan nilai besar dan nilai kecil. Yang dimana nilai terkecil dalam sebuah array berada pada index ke 0, dan nilai terbesar dalam sebuah array ada di index ke 1

contoh :

getMinMax([5,3,2,0,-1,11]) akan mengembalikan [-1, 11];

untuk mengecek apakah logika dari fungsi yang dibuat benar atau tidak jalankan ini pada terminal anda

npm run jest ./task/array/task-array-p3/test.js

*/

const getMinMax = (arr) => {
    // let length = arr.length;
    // max = -1;
    // min = 10000;

// CARA 1
//     for ( var i = 0 ; i < length ; i++){
//         if(arr[i] < min ){
//             min = arr[i];
//         }
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return [min,max];


// CARA 2
    let length = arr.length;
    let array = [10000 , -1];

    for (var i = 0 ; i < length ;i++){
        if(arr[i] < array[0]){
            array[0]=arr[i];
        }
        if (arr[i] > array[1]){
            array[1]=arr[i];
        }
    }
    return array;


};



module.exports = getMinMax;
