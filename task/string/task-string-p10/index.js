/*

Terdapat sebuah fungsi yang menerima parameter angka ganjil mulai dari 1-99,
anda diharapkan untuk membuat sebuah belah ketupat dari angka yang diberikan

example :

belahKetupat(5);

  *  
 * *
*   *
 * *
  *

belahKetupat(7);

000*000   
  * *
 *   *
*     *
 *   *
  * *
   *

*/

const belahKetupat = n => {
  let tmp ="";
  let kanan = Math.ceil(n / 2);
  let kiri = Math.ceil(n / 2) ; 

  for(let i=1; i<=n; i++){
    for(let j=1 ; j<=n ; j++){
      if (j === kiri || j === kanan) {
        tmp += '*';
      } else {
        tmp += ' ';
      }
    }
    if (i < Math.ceil(n / 2)) {
      kanan++;
      kiri--;
    } else {
      kanan--;
      kiri++;
    }
    tmp += "\n";
  }
  
  return tmp; 
};


module.exports = belahKetupat;
