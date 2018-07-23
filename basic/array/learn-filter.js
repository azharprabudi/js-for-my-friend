/*

Filter merupakan fungsi dari javascript yang berfungsi untuk melakukan menyaring data dalam sebuah array, bedasarkan kondisi yang kita tentukan. Filter akan mengembalikan array baru yang dimana array tersebut sudah disaring bedasarkan kondisi yang kita buat

Contoh 1:

var arrayInteger = [1,2,3,4,5,6];
arrayInteger = arrayInteger.filter(item => item >= 6); // akan menghasilkan [6] dikarenakan terdapat angka 6 dalam sebuah array yang dimana lebih besar daripada 6

Contoh 2:

var arrayObject = [{ name: 'azhar', age: 19 }, { name: 'siti', age: 18 }];
arrayObject = arrayObject.filter(item => item.age < 19); // akan menghasilkan [] dikarenakan tidak ditemukan umur yang kurang dari 19

*/

const learnFilter = () => {
  var arrayInteger = [1, 2, 3, 4, 5, 6];
  var arrayFilter = arrayInteger.filter(item => item >= 6);

  console.log(arrayFilter);
  return arrayFilter;
};

learnFilter();

module.exports = learnFilter;
