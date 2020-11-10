//Soal 1
//Release 0
class Animal {
    constructor(name) {
        this._name = name
        this.legs = 4
        this.cold_blooded = false
    }
    get name() {
        return this._name
    }
}
var sheep = new Animal("shaun");

console.log("----Release 0----")
console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)
console.log("")

