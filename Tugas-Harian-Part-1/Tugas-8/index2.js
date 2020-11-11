var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 3000 }
]

let i = 0
function executePromise(time) {
    readBooksPromise(time, books[i])
        .then(fullfilled => {
            i++
            executePromise(fullfilled)
        })
        .catch(error => {
            console.log(`Waktu saya ${error} untuk melanjutkan membaca ${books[i].name}.`)
        })
}

executePromise(10000)