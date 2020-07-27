/**
 * Jawaban Soal ke 1
 */
var start = 2,
    end = 20,;
while (start < end) {
    if (start == 2) {
        console.log("Looping Pertama");
    }
    console.log(start + " - " + "I love coding");
    start += 2;
}
while (end > start) {
    if (end == 20) {
        console.log("Looping Kedua");
    }
    console.log(end + " - " + "I love coding");
    end -= 2;
}

/**
 * Jawaban soal ke 2
 */
for (var z = 1; z < 20; z++) {
    if(z % 2) {
        console.log( z + " " + "Santai");
    } else if( z % 2 == 0) {
        console.log(z + " " + "Berkualitas");
    } else if( (z % 3 == 0) && (z % 2)){
        console.log(z + " " + "I Love Coding");
    }
}

/**
 * Jawaban soal ke 3
 */
for ($i=1; $i<=7; $i++){
    for ($j=7; $j>=$i; $j--){
        console.log("#");
    }
    console.log("\n");
}

/**
 * Jawaban soal ke 4
 */

var kalimat="saya sangat senang belajar javascript";
var hsl = kalimat.split(' ');
console.log(hsl);


/**
 * Jawaban soal ke 5
 */

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

daftarBuah.sort();

var hasilUrut = daftarBuah.join("\n");
console.log(hasilUrut);