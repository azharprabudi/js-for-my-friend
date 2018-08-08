/*

Terdapat sebuah fungsi yang menerima dua parameter yaitu :

1. nRow => jumlah baris (integer)
2. nCol => jumlah column (integer)
3. startAt => mulai trapesiumnya

Tugas anda adalah untuk membuat jajar genjang seperti dibawah ini, sesuai dengan baris dan kolom yang diberikan :

  ***
 ***
***

Contoh :

jajarGenjang(6, 16, 6);

     ***********
    ***********
   ***********
  ***********
 ***********
***********
*/

const jajarGenjang = (nRow, nCol, startAt) => {
  let k = nCol;
  let tmp = "";
  for(let i=0; i<nRow; i++){
    for(let j=1; j <= nCol ; j++){
      if ( j>=startAt && j<=k){
        tmp += '*';
      } else {
        tmp += ' ';
      }
    }
    tmp += "\n";
    k--;
    startAt--;      
}
  console.log(tmp);
  return tmp;

};

jajarGenjang(3,5,3);

module.exports = jajarGenjang;