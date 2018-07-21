/*

Tolong jelaskan maksud dari koding dibawah ini, dan kenapa dalam kodingan tersebut menggunakan arr.length.

Penjelasan : 
(Jawab disini / Bisa lewat line)

*/

const taskArray1 = () => {
  let arr = [10, 8, 6];
  arr[arr.length] = 10;

  console.log(arr);
  return arr;
};

taskArray1();

module.exports = taskArray1;
