// genap

/*
for (let i = 1; i <= 10; i++) {

    // kalau ganjil sisa hasil baginya = 1
    // kalau genap sisa hasil baginya = 0

    // iterasi ke - 1;
    // i = 1
    // i % 2 == 1 
    // gak ditampilin

    // iterasi ke - 2; 
    // i = 2
    // i % 2 == 0
    // ditampilin

    if (i % 2 == 0) {
        console.log(i);
    }

}
*/

// tampilkan bilangan genap yang tidak bisa dibagi 4

for (let i = 0; i <= 10; i++) {

    // iterasi - 1
    // i = 0
    // 0 % 2 == 0 (true)
    // 0 % 4 == 0 (false)

    // iterasi - 2
    // i = 1
    // 1 % 2 == 1 (false)
    // 1 % 4 == 1 (false)

    // iterasi - 5
    // i = 4
    // 4 % 2 == 0 (true)
    // 4 % 4 == 0 (true)

    if (i % 2 == 0 && i % 4 != 0) {
        /* output yang diingikan adalah 2, 6, 10 */
        /* bilangan genap 0 s/d 10 adalah 2, 4, 6, 8, 10 */
        console.log(i);
    }
}
