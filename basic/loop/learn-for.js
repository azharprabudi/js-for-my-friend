/*

// cara pertama
for (initialvariabel, kondisi looping, action terhadap initial variabel)

contoh: 
for (let i = 10; i >= 8; i--) {
    console.log(i);
}

// cara kedua
for (kondisi looping)

contoh:
let i = 10;
for (;i >= 8;) {
    console.log(i);
    i--;
}

*/

const learnFor = () => {
  let i = 10;
  for (; i >= 0; ) {
    console.log(i);
    i--;
  }
};

learnFor();

module.exports = learnFor;
