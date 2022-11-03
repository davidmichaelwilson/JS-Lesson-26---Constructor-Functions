const hotel1 = {
    name: "Disney Galactic Starcruiser",
    rooms: 100,
    stars: "⭐⭐⭐⭐",
    costPerNight: 10000
}

const hotel2 = {
    name: "Mos Eisley Superdeeelux",
    rooms: 22,
    stars: "⭐",
    costPerNight: 59
}


function newRepublicHolidayHotels(data) {
  this.name = data.name
  this.rooms = data.rooms
  this.stars = data.stars
  this.costPerNight = data.costPerNight
}

const hotel1Data = new newRepublicHolidayHotels(hotel1)
const hotel2Data = new newRepublicHolidayHotels(hotel2)

console.log(hotel1Data)
console.log(hotel2Data)

// ===== PRACTICE 1 =====

// function Animal(){
//   this.species = "ferret"
//   this.weightKg = 1
//   this.age = 2
// }

// const firstAnimal = new Animal
//   console.log(firstAnimal.species)

// ===== PRACTICE Constructor Functions =====
// const healthyAnimal1 = {
//   name: "Tony the",
//   species: "Tiger",
//   weightKg: 56,
//   age: 2,
//   releaseDate: "03/08/2022"
// }
// const healthyAnimal2 = {
//   name: "Vicki the Velociraptor",
//   species: "V. mongoliensis",
//   weightKg: 15,
//   age: 16,
//   releaseDate: "03/08/2022"
// }

// function Animal(data) {
//   this.name = data.name
//   this.species = data.species
//   this.weightKg = data.weightKg
//   this.age = data.age
//   this.releaseDate = data.releaseDate
// }

// const tonyTiger = new Animal(healthyAnimal1)
// const vickiV = new Animal(healthyAnimal2)

// console.log(tonyTiger)
// console.log(vickiV)

// ===== PRACTICE Methods =====
const healthyAnimal1 = {
  name: "Tony the Tiger",
  species: "tiger",
  weightKg: 56,
  age: 2,
  releaseDate: "03/08/2022"
}
const healthyAnimal2 = {
  name: "Vicki the Velociraptor",
  species: "V. mongoliensis",
  weightKg: 15,
  age: 16,
  releaseDate: "03/08/2022"
}

function Animal(data) {
  this.name = data.name
  this.species = data.species
  this.weightKg = data.weightKg
  this.age = data.age
  this.releaseDate = data.releaseDate
  this.summarizeAnimal = function() {
    console.log(`${this.name} is a ${this.age} year old ${this.species} who weighs ${this.weightKg} kilos and ran off into the wild on ${this.releaseDate}.`)
  }
}

const tonyTiger = new Animal(healthyAnimal1)
const vickiV = new Animal(healthyAnimal2)

tonyTiger.summarizeAnimal()