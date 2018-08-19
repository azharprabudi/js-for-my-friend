/*

Terdapat sebauh fungsi, bernama convertToGLanguage yang menerima parameter berupa string. Tugas anda adalah untuk mengubah string yang dikirimkan ke dalam bahasa g.

Contoh :

1. convertToGLanguage('zuli')

// output: zuguligi 

2. convertToGLanguage('kura kura')

// output: kuguraga kuguraga

*/

const convertToGLanguage = (str) => {
    let length = str.length;
    let vokal = ['a','u','i','e','o']; 
    let tmp ='';
    let status='';   

    for(let i=0 ; i<=str.length ; i++){
        let alfabet = str.charAt(i);
        for(j=0; j<=vokal.length ; j++){
            if(alfabet == vokal[j]){
                status = 'KETEMU';
                break;
            }else{
                status = 'TIDAK KETEMU';
            }
        }

        if(status == 'KETEMU'){
            tmp += alfabet + 'g' + vokal[j];
        }else{
            tmp += alfabet;
        }
    }
    return tmp;
    
};

module.exports = convertToGLanguage;
