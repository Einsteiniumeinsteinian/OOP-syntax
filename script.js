console.log('connected')

// Obj Programming
let elvesStore = {
    attack() {
        return 'attack with ' + this.weapon
    }
}
//? Factory Function
function CreateElfs(name, weapon) {
    let newElves = Object.create(elvesStore) //? creates a news elves with the __proto__ property pointing to elvesStore
    newElves.name = name
    newElves.weapon = weapon
    return newElves
}

// ? Calling constructed objeects
const jury = CreateElfs('Jury', 'Gun')
console.log(jury)
const donna = CreateElfs('Donna', 'Sword')
console.log(donna)

// ? Alternative using constructor functions
function Elf(name, weapon) {
    this.name = name
    this.weapon = weapon
}

// ? adding to the prototype
Elf.prototype.attack = function () {
    return 'attack with ' + this.weapon
}


// ? Calling constructed objeects
const jury = new Elf('Jury', 'Gun')
console.log(jury)
const donna = new Elf('Donna', 'Sword')
console.log(donna)

// ? ES6 Class 
class Elf {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }  
   grade = 'A '
   attack() {
        return 'attack with ' + this.weapon
    }

}
// ? Calling constructed objeects
const jury = new Elf('Jury', 'Gun')
console.log(jury)
const donna = new Elf('Donna', 'Sword')
console.log(donna)


// ? Class Extensions
class Character{
    constructor(name, weapon){
        this.name = name
        this.weapon = weapon
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

class Elf extends Character{
    constructor(name, weapon, type){
        super(name, weapon)
        this.type = type
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon)
        this.color = color
    }
    makeFort(buildingType){
        return `${this.name} built a ${buildingType} `
    }
}

// ? Calling constructed objeects
const jury = new Elf('Jury', 'Gun', 'House')
console.log(jury)
const donna = new Ogre('Donna', 'Sword', 'green')
console.log(donna)


// ? Exercise 
const weaponTypes = {
    hearts: 'hearts',
    clubs: 'clubs',
    spades: 'spades',
    diamond: 'diamond'
}

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'atack with ' + this.weapon
    }
}

class Queen extends Character{
    constructor(name, weapon, weaponType){
        super(name, weapon)
        this.type = weaponType in weaponTypes? weaponType : undefined
    }
    attack(){
        super.attack() // Calling the attack function in Character object (known as super)
        return `I am the ${this.name} of ${this.type}, now bow dow to me`
    } 
}

const victoria = new Queen('Victoria', 'army', 'hearts');

victoria.attack()