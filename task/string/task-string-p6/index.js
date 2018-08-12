/*

Terdapat sebuah fungsi yang menerima dua parameter yaitu :

1. nRow => jumlah baris (integer)
2. nCol => jumlah column (integer)

Tugas anda adalah untuk membuat segitiga seperti dibawah ini, sesuai dengan baris dan kolom yang diberikan :

123
12
1
12
123

Contoh :

doubleRectangle(11, 6);

123456
12345
1234
123
12
1
12
123
1234
12345
123456


*/

const doubleRectangl = (nRow, nCol) => {
    let tmp ="";
    for (let i = 0; i < nRow; i++) {
        let col = nCol - i;
        if (i >= Math.ceil(nRow / 2)) {
            col = Math.abs(nCol - i) + 2;
        }
        for (let j = 1; j <= col; j++) {
            tmp += j;
        }
        tmp += '\n';
    }
    console.log(tmp);
    return tmp;
};

doubleRectangl(11, 6);


module.exports = doubleRectangl;
