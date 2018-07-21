var inv = 'inv-001-1607';
var counter = inv.substr(4,3);

counter = parseInt(counter) + 1; // Number(counter);
counter = '000'.substr(counter.toString().length, counter.toString().length + 1) + counter;

console.log(counter);
