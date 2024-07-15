class Person {
  constructor(name, age, petName) {
    this.name = name;
    this.age = age;
    this.petName = petName;
    this.friends = [];
  }
  makeFriend(friend) {
    this.friends.push(friend)
    console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
  }
  doActivity(activity) {
    console.log(`${this.name} is ${activity}`);
  }
}

class Programmer extends Person {
  constructor(name, age, petName,language) {
    // super - shorthand notation
    super(name, age, petName);                 // invoke the Person constructor, setting the name, age, and friends properties on `this`
    this.favoriteLanguage = language; // add a favoriteLanguage property only for Programmers
  }
  
  // makeFriend is inherited
  // doActivity is inherited
  makeFriend(friend) {
    super.makeFriend(friend);
    console.log(`My favorite coding language is ${this.favoriteLanguage}, what is yours?`);
  }
  
  code() { // a new method only Programmer instances can use
    this.doActivity(`writing some ${this.favoriteLanguage} code.`);
  }
}

const itzel = new Person("itzel", 24, "mia");

const madison = new Programmer("madison", 18,"bubbles", "JS");

console.log(itzel);
console.log(itzel.makeFriend("America"));
console.log(itzel.makeFriend("Mekhi"));

console.log(madison.makeFriend("kevin"));
console.log(madison.makeFriend("zhenni"));
console.log(madison);