//Soal 1
//Keliling Lingkaran
console.log("Soal 1")
console.log("")
const kelilingLingkaran = (r) => {
    return 2 * 3.14 * r
}

//Luas Lingkaran
const luasLingkaran = (r) => {
    return 3.14 * Math.pow(r, 2)
}
console.log("Keliling Lingkaran")
console.log(kelilingLingkaran(4))
console.log("Luas Lingkaran")
console.log(luasLingkaran(4))
console.log("")

//Soal 2
console.log("Soal 2")
console.log("")
let kalimat = ""

const tambahKata = (kata) => {
    const word = kata
    return kalimat += `${word} `
}

tambahKata("saya")
tambahKata("adalah")
tambahKata("seorang")
tambahKata("frontend")
tambahKata("developer")

console.log(kalimat)
console.log("")

//Soal 3
console.log("Soal 3")
console.log("")

const newFunction = literal = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(firstName + " " + lastName)
        }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName()
console.log("")

//Soal 4
console.log("Soal 4")
console.log("")

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell } = newObject
console.log(firstName, lastName, destination, occupation)
console.log("")