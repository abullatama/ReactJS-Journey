var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

//Soal 1
let i = 0
function execute(sisaWaktu) {
    readBooks(sisaWaktu, books[i], function (sisaWaktu) {
        if (sisaWaktu > 0) {
            i++
            execute(sisaWaktu)
        }
    })
}

execute(10000)