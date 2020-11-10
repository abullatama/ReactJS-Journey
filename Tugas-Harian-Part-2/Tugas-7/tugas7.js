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

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false