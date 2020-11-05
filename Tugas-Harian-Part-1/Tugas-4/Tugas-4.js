//Soal 1
var i = 2
console.log("")
console.log("Soal 1")
console.log("")
console.log("LOOPING PERTAMA")
while (i <= 20) {
    console.log(i + " - I love Coding")
    i = i + 2
}

i = 20
console.log("LOOPING KEDUA")
while (i > 0) {
    console.log(i + " - I will become a frontend developer")
    i = i - 2
}
console.log("")

//Soal 2
console.log("Soal 2")
console.log("")
for (var i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 2 == 1) {
        console.log(i + " I Love Coding")
    } else if (i % 2 == 0) {
        console.log(i + " Berkualitas")
    } else if (i % 2 == 1) {
        console.log(i + " Santai")
    }
}
console.log("")

//Soal 3
console.log("Soal 3")
console.log("")
i = 1
var segitiga = ""
while (i <= 7) {
    j = 1
    while (j <= i) {
        segitiga += "#"
        j++
    }
    console.log(segitiga)
    segitiga = ""
    i++
}
console.log("")

//Soal 4
var kalimat = "saya sangat senang belajar javascript"
var arr = kalimat.split(" ")
console.log("Soal 4")
console.log("")
console.log(arr)
console.log("")