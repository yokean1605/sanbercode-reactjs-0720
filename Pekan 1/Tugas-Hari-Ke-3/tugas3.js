/**
 * =========================================================================================================
 * Jawaban soal 1
 * =========================================================================================================
 */
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

//to Uppercase
KataKeempatNew = kataKeempat.toUpperCase();
// mengambil kata pertama dari variable kataKedua untuk dijadikan huruf kapital
kataKedua1 = kataKedua.charAt(0).toUpperCase();
// menghapus kata pertama pada variable kataKedua
kataKedua2 = kataKedua.slice(1);
// menggabungkan kedua variable diatas
joinKataKedua = kataKedua1 + kataKedua2;
// simpan hasil di dalam variable
hasil = kataPertama.concat(" ", joinKataKedua).concat(" ", kataKetiga).concat(" ", KataKeempatNew);
// output dalam bentuk console log
console.log(hasil);



/**
 * =========================================================================================================
 *  Jawaban soal ke 2
 * =========================================================================================================
 */
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

// mengubah string to int
var kataPertamaInt = Number(kataPertama);
var kataKeduaInt = Number(kataKedua);
var kataKetigaInt = Number(kataKetiga);
var kataKeempatint = Number(kataKeempat);

// menampung hasilnya ke dalam variable
jumlah = kataPertamaInt + kataKeduaInt + kataKetigaInt + kataKeempatint;

// menampilkan ke dalam console
console.log(jumlah);


/**
 * =========================================================================================================
 * Jawaban Soal 3
 * =========================================================================================================
 */
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 15); // do your own! 
var kataKetiga; // do your own! 
var kataKeempat; // do your own! 
var kataKelima; // do your own! 

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

/**
 * =========================================================================================================
 * Jawaban Soal 4
 * =========================================================================================================
 */
var nilai = 75;
if (nilai >= 80) {
    console.log("Indexnya A");
} else if (nilai >= 70 && nilai <= 80) {
    console.log("Indexnya B");
} else if (nilai >= 60 && nilai <= 70) {
    console.log("Indexnya C");
} else if (nilai >= 50 && nilai <= 60) {
    console.log("Indexnya D");
} else {
    console.log("Indexnya E");
}

/**
 * =========================================================================================================
 * Jawaban Soal 5
 * =========================================================================================================
 */
var tanggal = 16;
var bulan = 5;
var tahun = 1991;

var tanggalStr = tanggal.toString();
var bulanStr = bulan.toString();
var tahunlStr = tahun.toString();

var tanggal = 1

switch (tanggal) {
    case 1: { console.log(tanggalStr + " - " + bulanStr + " - " + tahunlStr); break; }
    default: { console.log("tanggal salah"); }
}
