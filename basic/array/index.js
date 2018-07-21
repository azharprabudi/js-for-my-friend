/*

Array merupakan sebuah kumpulan dari beberapa nilai yang dikumpulkan dalam satu wadah.
Dapat dianalogikan sebagai rak baju, yang dimana di dalam rak baju terdapat jenis jenis baju
yang berbeda, tujuannya dicipatkan rak baju adalah biar suatu saat pemiliki baju, dapat dengan
mudah untuk menemukan baju yang diinginkan. Selain itu array sering diibaratkan sebagai buku,
yang dimana apabila kita ingin membaca konten daripada sebuah buku, kita perlu membaca
daftar isi untuk melihat konten yang ingin kita baca terdapat pada halaman berapa.

Penulisan array dapat dilakukan dijavascript dengan cara sebagai berikut :

let iniAdalahArrayKosong = []; // ini adalah array yang memiliki nilai kosong
let iniAdalahArrayBerisi = [1, 2, 3, 4]; // ini adalah array yang memiliki nilai

lalu bagaimana cara menambahkan nilai ke dalam sebuah array yang sudah memiliki nilai atau belum ? hal tersebut dapat dilakukan dengan 3 cara yaitu :

1. Masukkan nilai dengan menentukan index

Perlu diingat bhwa untuk mengakses nilai array atau memasukkan nilai kepada array kita harus mengetahui indexnya terlebih dahulu, biasanya index array dimulai dari angka 0.

Contoh index array:

let iniAdalahArrayBerisi = [10, 9, 8, 7, 6];

dari variabel diatas, maka dapat diketahui :

10 => index ke 0
9 => index ke 1
8 => index ke 2
7 => index ke 3
6 => index ke 4

dan untuk mengetahui berapa banyak value yang tersimpan dalam array dapat menggunakan fungsi
.length

contoh:
iniAdalahArrayBerisi.length; // nilainya adalah 5 dikarenakan di dalam variabel iniAdalahArrayBerisi terdapat angka 10, 9, 8, 7, 6 (5 angka)


contoh menambahkan array: 
iniAdalahArrayKosong[iniAdalahArrayKosong.length] = 10;

2. Masukkan nilai dengan menggunakan push (baca file learn-push.js)
3. Masukkan nilai dengan menggunakan concat (baca file learn-concat.js)
4. Masukkan nilai dengan menggunakan destructor array (baca file learn-destructor-array.js);


contoh membaca data dalam array
let iniAdalahArrayBerisi = [1, 2, 3, 4];
console.log(iniAdalahArrayBerisi[2]); // akan menampilkan angka 3


*/

const index = () => {
  let iniAdalahArrayBerisi = [1, 2, 3, 4];

  iniAdalahArrayBerisi[4] = 10;

  console.log(iniAdalahArrayBerisi);
  return iniAdalahArrayBerisi;
};

index();

module.exports = index;
