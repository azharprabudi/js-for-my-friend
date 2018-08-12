/*

Terdapat sebuah fungsi yang menerima sebuah parameter berupa integer yang nilainya 1-99,
anda diminta untuk membuat sebuah kotak dari parameter yang diberikan sebagai contoh :

makeRectangle(6);

output :

******
*    *
*    *
*    *
*    *
******

*/

const makeRectangle = numb => {

    let tmp ="";

    for (let i=1 ;i<=numb ; i++){
        for(let j=1 ;j<=numb ;j++){
            if( i == 1 || i==numb || j==1 || j==numb ){
                tmp += '*';
            } else {
                tmp += ' ';
            }
        }
        tmp += "\n";
    }

    console.log(tmp);
    return tmp;
};


module.exports = makeRectangle;
