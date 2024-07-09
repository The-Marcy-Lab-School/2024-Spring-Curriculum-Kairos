// Factory function: 

const makePet = (breed, species, sound, age, friend = []) => {
  let name = "";
  return {
    breed, 
    species, 
    sound, 
    age,
    friend, 
    makeSound (){
      return this.sound
    },
    addFriend (name){
      this.friend.push(name);
      return `friend ${name} added`
    },
    updateName(newName){
      name = newName;
      return `Their new name is ${name}`
    }
  }
}
// instance of makePet
const itzelsFirstPet = makePet("black cat", "cat", "mew", "1");
const itzelsSecondPet = makePet("tabby", "cat", "meow", "2");

// console.log(itzelsFirstPet.updateName("mia"));

// console.log(itzelsFirstPet);
// console.log(itzelsSecondPet);


console.log(itzelsFirstPet.makeSound == itzelsSecondPet.makeSound);

//classes

class Pet {
  // constructor -> function
  #name
  static allPets = [];
  constructor (name = "", breed, species, sound, age = 0, friend = []){
    this.#name = name
    this.breed = breed 
    this.species = species
    this.sound = sound 
    this.age = age
    this.friend = friend
    // adding every instance of a Pet!
    // By pushing this, it is pushing the obj that is created when a Pet instance is created. 
    Pet.allPets.push(this);
  }
  makeSound (){
    return this.sound
  }
  addFriend (name){
    this.friend.push(name);
    return `friend ${name} added`
  }
  getName (){
    return this.#name;
  }
  updateName(newName){
    this.#name = newName;
    return `Their new name is ${this.#name}`
  }
  getAllPets(){
    return [...Pet.allPets];
  }
}

const itzyFirstPet = new Pet("luna","black cat", "cat", "mew", "1");
const itzySecondPet = new Pet("nina","tabby", "cat", "meow", "2");


// console.log("Instances of Pet:",itzyFirstPet.getAllPets())
// console.log("Instances of Pet:",itzySecondPet.getAllPets())
console.log(itzySecondPet);

console.log(itzySecondPet.getName());

console.log(itzyFirstPet.makeSound == itzySecondPet.makeSound);