/*


Find merupakan fungsi dari javascript yang berfungsi untuk menemukan sebuah data yang dicari dalam sebuah array, namun perbedaan mendasar dengan filter adalah find langsung mengembalikan datanya tanpa mengembalikan sebuah array. Namun apabila data yang dicari tidak ketemu maka akan mengembalikan undefined

Contoh 1:

var obj = [{name: 'azhar'},{name: 'kondel'}];
return obj.find(item => item.name === 'kondel'); // maka akan mengembalikan {name: 'kondel'}

Contoh 2:
var obj = [{name: 'siti'},{name: 'zuli'}];
return obj.find(item => item.name === 'azhar'); // maka akan mengembalikan undefined

*/

const learnFind = () => {
  var arrayObject = [
    { name: "azhar", age: 21, city: "jakarta" },
    { name: "siti", age: 21, city: "jakarta" },
    { name: "rian", age: 21, city: "jakarta" },
    { name: "zahra", age: 21, city: "bandung" }
  ];

  return arrayObject.find(item => item.name == "siti");
};

console.log(learnFind());

module.exports = learnFind;
