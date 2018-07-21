let i = 0;

do {
    // console.log('i : ' + i); menampilkan output teknik 1
    // console.log(`i : ${i}`); menampilkan output teknik 2
    ++i;
} while (i < 1);

/*

i++ akan mengembalikan nilai sebelum variabel i ditambahkan, dikurangi, dikali, dll
contoh :
let i = 1;
var tmp = i++;
isi dari tmp merupakan angka 1, bukan angka 2. Karena i++ hanya mengembalikan angka
sebelum ditambahkan

++i adalah kebalikan dari i++ yaitu dia mengembalikan sebuah variabel yang sudah ditambahkan
let i = 1;
var tmp = ++i;
isi dari tmp merupakan angka 2, bukan angka 1. Karena ++i akan mengembalikan angka yang
sudah ditambahkan

*/
