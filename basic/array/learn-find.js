/**/

const learnFind = () => {
  var arrayObject = [
    { name: "azhar", age: 21, city: "jakarta" },
    { name: "siti", age: 21, city: "jakarta" },
    { name: "rian", age: 21, city: "jakarta" },
    { name: "zahra", age: 21, city: "bandung" }
  ];

  var asdadsadsa = arrayObject.find(item => item.name == "siti");

  return asdadsadsa;
};

console.log(learnFind());
