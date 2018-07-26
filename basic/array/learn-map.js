/*

Map merupakan fungsi dari javascript yang bertujuan untuk melakukan pengulangan dari sebuah array tapi akan mengembalikan array baru, dan dapat kita modifikasi ketika proses looping terjadi

Contoh 1 :

var arrayNumber = [5, 4, 3, 2];
arrayNumber = arrayNumber.map(item => item * 2); // maka akan menghasilkan [10, 8, 6, 4]

arrayNumber.map(function(item, index) {
  
})

Contoh 2 :

var arrayObject = [{ name: 'azhar', age: 21 }, { name: 'siti', age: 21 }];
arrayObject = arrayObject.map(item => Object.assign({}, item, {age: item.age + 2})); // maka akan menghasilkan [{name: 'azhar', age: 23}, {name: 'siti', age: 23}];

*/

const learnMap = () => {
  var arrayObject = [
    { name: "azhar", age: 21, city: "jakarta" },
    { name: "azhar", age: 21, city: "jakarta" },
    { name: "siti", age: 21, city: "jakarta" },
    { name: "rian", age: 21, city: "jakarta" },
    { name: "zahra", age: 21, city: "bandung" }
  ];

  /* map bisa memodif data dalam array seperti ini */
  return arrayObject.map(item =>
    Object.assign({}, item, {
      name: item.name.concat(" modif"),
      age: item.age + 3,
      city: item.city.concat(" modif")
    })
  );
};

console.log(learnMap());

module.exports = learnMap;
