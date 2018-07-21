/*

Concat merupakan fungsi yang tersedia javascript yang dapat digunakan oleh variabel yang memiliki nilai string dan array. Tujuan utama dari concat adalah menggabungkan array / string
terhadap data baru baik itu array juga, dan kemudian mengembalikannya sebagai array baru

*/

const learnConcat = () => {
  /* input ke array 1 dimensi */
  let arrKosong = [];
  let arrBerisi = [1, 2, 3, 4];

  arrKosong = arrKosong.concat(arrBerisi, 5);
  console.log(arrKosong); // [1, 2, 3, 4, 5];

  arrKosong = arrKosong.concat([arrKosong]);
  console.log(arrKosong); // [1,2,3,4,5, [1,2,3,4,5]]

  return arrKosong;
};

learnConcat();

module.exports = learnConcat;
