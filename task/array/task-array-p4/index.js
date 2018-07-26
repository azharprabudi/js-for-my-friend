/*

Buatlah sebuah fungsi, dimana parameter pertama yaitu inputan array yang berisikan daftar nama. Dan parameter kedua yaitu nama yang ingin ditemukan. Jika terdapat nama dalam array tersebut kembalikan dengan kata kata "KETEMU", jika tidak maka kembalikan dengan kata "TIDAK KETEMU".

Contoh 1 :

var listMahasiswa = ["azhar", "zuli", "rara", "semok"];
var findHerName = "azhar";
temukanFungsi(); // akan mengembalikan "KETEMU"

Contoh 2

var listDosen = ["Joko", "Munawar", "Malabay", "Kundang"];
var findHerName = "Elisabeth";
temukanFungsi(); // akan mengembalikan "TIDAK KETEMU"

INGAT TIDAK BOLEH MENGGUNAKAN FUNGSI .FIND

untuk menjalankan test silahkan copas command berikut

npm run test ./task/array/task-array-p4/test.js

*/
[
    "zahra asri septia",
    "nur agustin",
    "ade ayu andini",
    "fernanda racmadini",
  ]
  "ade ayu andini"
  

const findName = (listName, name) => {
    let arr = listName ;
    let length = arr.length;
    let isFind = '';

    for (var i = 0; i < length ; i++) {
        if(arr[i] == name ) {
            isFind = 'KETEMU';        
            break;
        } else {
            isFind = 'TIDAK KETEMU';
        }
    }
    return isFind;
};


module.exports = findName;
