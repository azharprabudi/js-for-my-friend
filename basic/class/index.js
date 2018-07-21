/*

class merupakan sesuatu yang memiliki properti / attribute dan method / fungsi, sama layaknya manusia yang memiliki beberapa attribute seperti kuping, mulut, hidung, dan fungsi yaitu berjalan berlari berenang, dll. Semua itu dibungkus ke dalam class, agar informasi yang dibutuhkan berada dalam satu paket tersebut, dan bisa diterapkan kepada beberapa variabel yang ingin menerapkan attribute dan fungsi yang dimiliki oleh class tersebut

*/

class Manusia {
  printHelloWorld() {
    return `hello world`;
  }
}

const mManusia = new Manusia();
const m1Manusia = new Manusia();

console.log(`mManusia: ${mManusia.printHelloWorld()}`);
console.log(`m1Manusia: ${m1Manusia.printHelloWorld()}`);

module.exports = Manusia;
