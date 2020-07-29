// di index.js
var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

// Tulis code untuk memanggil function readBooks di sini
function Read(waktu, index) {
    readBooks(waktu, books[index], function (siswaWaktu) {
        console.log(siswaWaktu);
        if (siswaWaktu > 0) {
            if (index + 1 < books.length) {
                Read(siswaWaktu, index + 1)
            } else {
                console.log("Semua buku selesai dibaca");
            }
        }
    });
}
Read(10000, 0);
