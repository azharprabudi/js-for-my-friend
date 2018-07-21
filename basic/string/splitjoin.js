var inv = 'INV-1607-00001';
var splitInv = inv.split('-');
var uniqueNumber = splitInv[2];
var intUniqueuNumber = parseInt(uniqueNumber) + 1; // 1
uniqueNumber = '00000'.substr(0, 5 - intUniqueuNumber.toString().length) + intUniqueuNumber;

// var newInvoiceId = `INV-1607-${uniqueNumber}`;

splitInv[2] = uniqueNumber; // 00002
console.log(splitInv.join('-'));
