/**
 * ===============================================================
 * Jawaban soal 1
 * ===============================================================
 */
function halo() {
    return "Halo Sanbers!"
}

console.log(halo());

/**
 * ===============================================================
 * Jawaban soal 2
 * ===============================================================
 */

// initial variable
var num1 = 12;
var num2 = 4;

// deklare function
function kalikan(a, b) {
    c = a * b;
    return c;
}

// initial variable yang berisikan function
var hasilKali = kalikan(num1, num2);
// tampilkan hasil di dalam console log
console.log(hasilKali);


/**
 * ==============================================================
 * Jawaban soal ke 3
 * ==============================================================
 */

var nama = "John",
    age = 30,
    address = "Jalan belum jadi",
    hobby = "Gaming";

function introduce(nm, age, add, hob) {
    console.log(
        "Nama saya " + nm + ", umur saya " + age + " tahun, alamat saya ada di " + add + ", dan saya punya hobby yaitu " + hob + "!"
    );
}
var perkenalan = introduce(nama, age, address, hobby);
console.log(perkenalan);