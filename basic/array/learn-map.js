/*

Map merupakan fungsi dari javascript yang bertujuan untuk melakukan pengulangan dari sebuah array tapi akan mengembalikan array baru, dan dapat kita modifikasi ketika proses looping terjadi

Contoh 1 :

var arrayNumber = [5, 4, 3, 2];
arrayNumber = arrayNumber.map(item => item * 2); // maka akan menghasilkan [10, 8, 6, 4]

Contoh 2 :

var arrayObject = [{ name: 'azhar', age: 21 }, { name: 'siti', age: 21 }];
arrayObject = arrayObject.map(item => Object.assign({}, item, {age: item.age + 2})); // maka akan menghasilkan [{name: 'azhar', age: 23}, {name: 'siti', age: 23}];

*/

const learnMap = () => {
  var arrayObject = [
    { name: "azhar", age: 21, city: "jakarta" },
    { name: "siti", age: 21, city: "jakarta" },
    { name: "rian", age: 21, city: "jakarta" },
    { name: "zahra", age: 21, city: "jakarta" }
  ];

  var modifArrayObject = arrayObject.map(item =>
    Object.assign({}, item, { age: item.age + 2 })
  );

  console.log(modifArrayObject);
  return modifArrayObject;
};

learnMap();

module.exports = learnMap;
