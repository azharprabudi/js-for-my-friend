// const pertambahan = (a, b) => {
//     let hasil = a + b;
//     console.log(hasil);
//     return hasil;
// }

// const perkurangan = (a, b) => {
//     let hasil = a - b;
//     console.log(hasil);
//     // return hasil;
// }

// var hasilPertambahan = pertambahan(10, 2); // 12
// var hasilPengurangan = perkurangan(hasilPertambahan, 2);

// console.log('hasilnya adalah', hasilPengurangan);

const getMedian = (arr) => {
    
    let length = arr.length;
    // total ganjil [1,2,3,4,5]
    // total genap [1,2,3,4,5,6]
    // total genap [1,2,3,4,5,6,7,8,9,10] 
    if (length % 2 === 0) { // genap
        let index = length / 2; // 3
        let hasil = (arr[index] + arr[index - 1]) / 2;
        return hasil;
    } else {
        let index = Math.floor(length / 2);
        return arr[index];
    }
};

var median = getMedian([1,2,3,4,5]);
console.log(median);