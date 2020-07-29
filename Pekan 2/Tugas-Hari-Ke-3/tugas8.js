/**
 * soal ke 1
 */
console.log("--- SOAL 1 ---");

const phi = 3.14;

const luasLinkaran = (r) => {
    let luas = phi * Math.pow(r, 2);
    return `Luas Lingkaran dari radius ${r} adalah ${luas}`;
}
console.log(luasLinkaran(4));

const kelilingLingkaran = (r) => {
    let keliling = 2 * phi * r;
    return `Keliling Lingkaran dari radius ${r} adalah ${keliling}`;
}
console.log(kelilingLingkaran(4));


/**
 * soal ke 2
 */
console.log("--- SOAL 2 ---");

const k1 = 'saya',
    k2 = 'adalah',
    k3 = 'seorang',
    k4 = 'frontend',
    k5 = 'developer';

const kalimat = () => {
    let gabung = `${k1} ${k2} ${k3} ${k4} ${k5}`;
    return gabung;
};

console.log(kalimat());

/**
 * soal ke 3
 */
console.log("--- SOAL 3 ---");

class Book {
    constructor(name, totalPage, price) {
        this._name = name;
        this._totalPage = totalPage;
        this._price = price;
    }
    get name() {
        return this._name;
    }
    get name() {
        return this._totalPage;
    }
    get name() {
        return this._price;
    }

    present() {
        return `Nama buku ini adalah ${this._name}, dengan total halaman ${this._totalPage}, dan harganya cukup fantastis ${this._price} amerika`;
    }
}

class komik extends Book {
    constructor(name, totalPage, price) {
        super(name, totalPage, price);
        this._isColorful = true;
    }

    show() {
        return `${this.present()}.\n Apakah buku ini penuh berwarna? jawabannya adalah ${this._isColorful}`;
    }
}

var buku = new komik("one Piece", "1000 pages", "$1000");
console.log(buku.show());