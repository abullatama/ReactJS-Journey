var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 },
    { name: 'Koran', timeSpent: 1000 }
]

//Soal 1
let i = 0
function execute(sisaWaktu) {
    readBooks(sisaWaktu, books[i], function (sisaWaktu) {
        i++
        if (sisaWaktu > 0) {
            execute(sisaWaktu)
        } else {
            readBooks(sisaWaktu, books[i], function (time) {
                console.log(`Sisa waktu saya ${time}. Saya tidak dapat melanjutkan membaca ${books[i].name}.`)
            })
        }
    })
}

execute(10000)