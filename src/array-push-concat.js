// var empty_array = ['azhar-0'];

// var new_empty_array = [];
// empty_array.push('azhar-2');

// new_empty_array = empty_array.concat('azhar-2', 'azhar-3', 'azhar-4', empty_array);
// new_empty_array = new_empty_array.concat(10);

// console.log('empty_array', empty_array);
// console.log('new_empty_array', new_empty_array);


// console.log('Sebelum dimasukkan', empty_array);

// masukkan value dengan index yang ditentukan
// empty_array[2] = 1;
// empty_array[1] = 2;

// masukkan value dengan function yang sudah ada
// empty_array.push(1); // push atau concat

// empty_array = [1]
// new_empty_array = [1]
// var new_empty_array = empty_array // es6

// empty_array[0] = 5;

var push_arr = [];
var concat_arr = [];
for (let i = 0; i < 10; i++) {
    // empty_array.push(i + 1);

    // pas loop ke 0
    // empty = []

    // empty_array = [i + 1]; => loop ke 0 akan menghasilkan empty_array [1]

    // pas loop ke 1
    // empty = [1]
    // empty_aray = [1, i + 1] => loop ke 1 akan menghasilkan empty_array [1, 2]
    // empty_array = [...empty_array, i + 1];


    // concat
    // pas loop ke 0 empty = [];
    // gunakan fngsi concat empty_array.concat(i + 1)
    // empty_array = empty_array.concat('azhar');

    // push
    // empty_array.push('azhar-' + (i + 1));

    // concat
    // empty_array = empty_array.concat('azhar-' + (i + 1));

    // push
    // loop ke 0 [1]
    // loop ke 1 [1,2]
    push_arr.push(i + 1);

    // concat (push_arr)
    // loop ke 0 [1, 1]
    // loop ke 1 [1,2,2]

    // concat (concat_arr)
    // loop ke 0 [1]
    // loop ke 1 [1, 2]
    concat_arr = [...concat_arr]; //es 6 
    concat_arr = concat_arr.concat(i + 1);
}

concat_arr[0] = 10;

console.log('push', push_arr);
console.log('concat', concat_arr);
// console.log('Sesudah dimasukkan', empty_array);
