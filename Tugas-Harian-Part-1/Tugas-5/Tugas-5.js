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