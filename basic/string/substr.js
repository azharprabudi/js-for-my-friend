/*

substr adalah fungsi untuk mengambil beberapa kata dalam sebuah kalimat,
dimana parameternya pertamanya adalah index atau ingin dimulai dari index ke berapa
dan parameter kedua yaitu ingin diambil berapa banyak mulai dari index tersebut

var name = 'azhar prabudi';
name.subtr(0, 5) // azhar

*/


/*

Generate sebuah invoice, yang dimana angka di paling belakang akan bertambah 1 setiap ingin membuat invoice, dan update tanggal dan bulannya

*/
var invoiceId = 'INV-1607-00111';
var uniqueNumber = invoiceId.substr(9, 5); // 00001
var intUniqueuNumber = parseInt(uniqueNumber) + 1; // 1

uniqueNumber = '00000'.substr(0, 5 - intUniqueuNumber.toString().length) + intUniqueuNumber;

var date = new Date();
var day = '00'.substr(0, 2 - date.getDate().toString().length) + date.getDate();
var month = '00'.substr(0, 2 - date.getMonth().toString().length) + date.getMonth();

var newInvoiceId = `INV-${day}${month}-${uniqueNumber}`;


console.log(newInvoiceId);

/*
const date = new Date();
date.getFullYear() // tahun;
date.getMonth() // bulan
date.getDate() // tanggal
date.getHours() // jam
date.getMinutes() // menit
date.getSeconds() // detik
*/