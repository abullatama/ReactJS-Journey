//Soal 1
console.log("Soal 1")
function halo() {
    return "Halo Sanbers!"
}

console.log(halo())
console.log("")

//Soal 2
console.log("Soal 2")
function kalikan(num1, num2) {
    return num1 * num2
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali)
console.log("")

//Soal 3
console.log("Soal 3")
function introduce(name, age, address, hobby) {
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!"
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)
console.log("")

//Soal 4
console.log("Soal 4")
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]
var objectDaftarPeserta =
{
    Nama: arrayDaftarPeserta[0],
    Jenis_Kelamin: arrayDaftarPeserta[1],
    Hobi: arrayDaftarPeserta[2],
    Tahun_Lahir: arrayDaftarPeserta[3]
}
console.log(objectDaftarPeserta)
console.log("")

//Soal 5
console.log("Soal 5")
var buah = [
    { nama: "strawberry", warna: "merah", ada_bijinya: "tidak", harga: 9000 },
    { nama: "jeruk", warna: "oranye", ada_bijinya: "ada", harga: 8000 },
    { nama: "semangka", warna: "hijau & merah", ada_bijinya: "ada", harga: 10000 },
    { nama: "pisang", warna: "kuning", ada_bijinya: "tidak", harga: 5000 }
]
console.log(buah[0])
console.log("")

//Soal 6
console.log("Soal 6")
var dataFilm = []

function pushDataFilm(nama, durasi, genre, tahun) {
    var objFilm = { nama: nama, durasi: durasi, genre: genre, tahun: tahun }
    dataFilm.push(objFilm)
}

pushDataFilm("Avengers", "1 Jam 30 menit", "action", 2012)
pushDataFilm("Harry Poter", "1 Jam 15 menit", "fiction", 2010)
pushDataFilm("John Wick", "2 Jam 10 menit", "action", 2015)
console.log(dataFilm)
console.log("")