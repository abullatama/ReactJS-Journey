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

//Release 1
class Ape extends Animal {
    constructor(name) {
        super(name)
    }
    yell() {
        console.log("Auooo")
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name)
    }
    jump() {
        console.log("hop hop")
    }
}

var sungokong = new Ape("kera sakti")

console.log("----Release 1----")
console.log(sungokong.name)
console.log(sungokong.legs = 2)
console.log(sungokong.cold_blooded)
sungokong.yell()
console.log("")
var kodok = new Frog("buduk")
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
kodok.jump() // "hop hop" 


//Soal 2
console.log("")
console.log("----Soal 2----")

class Clock {
    constructor({ template }) {
        this.template = template
        this.timer
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)

        console.log(output);
    }

    stop() {
        clearInterval(this.timer)
    }

    start() {
        this.timer = setInterval(() => this.render(), 1000)
    }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start(); 