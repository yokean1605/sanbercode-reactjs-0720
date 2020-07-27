/**
 * ==============================
 * Jawaban Soal ke 1
 * ==============================
 */

var arrayDaftarPeserta = {
    nama: "Asep",
    jenisKelamin: "laki-laki",
    hobi: "baca buku",
    tahunLahir: 1992
}


/**
 * ===============================
 * Jawaban Soal ke 2
 * ===============================
 */

var buah = [
    {
        nama: "strawberry",
        warna: "merah",
        "ada bijinya": "tidak",
        harga: 9000
    },
    {
        nama: "jeruk",
        warna: "oranye",
        "ada bijinya": "ada",
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        "ada bijinya": "ada",
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        "ada bijinya": "tidak",
        harga: 5000
    }
]

console.log(buah[0]);

/**
 * ===============================
 * Jawaban soal ke 3
 * ===============================
 */

var dataFilm = []

var dataFilmBaru = {
    nama: "One Piece",
    durasi: "120 menit",
    genre: "anime",
    tahun: 2021
}

function tambahDataFilm(data) {
    return dataFilm.push(data);
}

var pushDataFilm = new tambahDataFilm(dataFilmBaru)

console.log(dataFilm);

/**
 * Jawaban soal ke 4
 */

//  release 0
class Animal {

    // constructor
    constructor(name) {
        this.name = name,
            this.legs = 4,
            this.cold_blooded = false
    }

    get animal_name() {
        return this.name;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.animal_name); // atau console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// release 1
class Frog extends Animal {
    static yell() {
        return "Auooo";
    }
}

class Ape extends Animal {
    get legs() {
        this.legs = 2;
    }
    static jump() {
        return "hop hop";
    }
}

var sungokong = new Ape("kera sakti");
sungokong.yell();

var kodok = new Frog("buduk");
kodok.jump();


/**
 * =================================
 * Jawaban soal 5
 * =================================
 */

class Clock {

    constructor({ template }) {

        var timer;

        function render() {
            var date = new Date();

            var hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            var mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            var secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        this.stop = function () {
            clearInterval(timer);
        };

        this.start = function () {
            render();
            timer = setInterval(render, 1000);
        };

    }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();


