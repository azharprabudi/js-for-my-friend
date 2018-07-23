/*

Tolong jelaskan maksud dari koding dibawah ini, dan kenapa dalam kodingan tersebut menggunakan arr.length.

Penjelasan : 
(Jawab disini / Bisa lewat line)
variabel arr dimana terdapat array yang isinya [10,8,6]
trus variabel arr di gabungin sama arr lenght yang isi nya 10.
trus hasilnya dari arr 10,8,6, 8
dimana di balikin hasil arrnya yang tadi di gabungin

arr.length di sini itu gabungan ya, jadi variabel arr kan isi nya 10,8,6 trus di combinasiin sama arr.lenght yaitu 10 .

*/

const taskArray1 = () => {
  let arr = [10, 8, 6];
  arr[arr.length] = 10;

  console.log(arr);
  return arr;
};

taskArray1();

module.exports = taskArray1;
