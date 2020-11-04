// tugas 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log("Soal 1");
console.log(kataPertama + " " + kataKedua + " " + kataKetiga + " " + kataKeempat);
console.log(" ");

// tugas 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var strPertama = parseInt(kataPertama);
var strKedua = parseInt(kataKedua);
var strKetiga = parseInt(kataKetiga);
var strKeempat = parseInt(kataKeempat);

var jumlah = strPertama + strKedua + strKetiga + strKeempat;

console.log("Soal 2");
console.log(jumlah);
console.log(" ");

//tugas 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log("Soal 3");
console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);
console.log(" ");

//tugas 4
var nilai = 75;

console.log("Soal 4");
if (nilai >= 80) {
    console.log("A");
} else if (nilai >= 70 && nilai < 80) {
    console.log("B");
} else if (nilai >= 60 && nilai < 70) {
    console.log("C");
} else if (nilai >= 50 && nilai < 60) {
    console.log("D");
} else if (nilai < 50) {
    console.log("E");
}
console.log(" ");

//tugas 5
var tanggal = 1;
var bulan = 12;
var tahun = 1997;

switch (bulan) {
    case 1: { bulan = "Januari" }
    case 2: { bulan = "Februari" }
    case 3: { bulan = "Maret" }
    case 4: { bulan = "April" }
    case 5: { bulan = "Mei" }
    case 6: { bulan = "Juni" }
    case 7: { bulan = "Juli" }
    case 8: { bulan = "Agustus" }
    case 9: { bulan = "September" }
    case 10: { bulan = "Oktober" }
    case 11: { bulan = "November" }
    case 12: { bulan = "Desember" }
}

console.log("Soal 5");
console.log(tanggal + " " + bulan + " " + tahun);
console.log(" ");