class Person {
  #secret = '42'

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  doActivity(activity) {
    console.log(`${this.name} is ${activity}`);
  }

  static sayHi() {
    console.log('hi')
  }

  printSecret() {
    console.log(this.#secret);
  }
}

// Person.sayHi();

class FriendlyPerson extends Person {
  constructor(name, age) {
    super(name, age);
    this.friends = [];
  }

  doActivity(activity) {
    console.log("i do everything with joy")
  }

  makeFriend(friend) {
    this.friends.push(friend)
    console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
  }
}

// FriendlyPerson.sayHi();



// Programmer is now a sub class
// Person is the super class
class Programmer extends Person {
  constructor(name, age, language) {
    super(name, age); // invoke the Person constructor
    this.favoriteLanguage = language
    // delete this.friends
  }

  // method override
  doActivity(activity) {
    // calling doActivity from the super class
    console.log('tap tap tap');
    super.doActivity(activity);
    console.log('tap tap tap');
  }

  // we don't need to redefine makeFriends or doActivity

  code() {
    this.doActivity(`writing some ${this.favoriteLanguage} code.`);
  }
}

const ben = new Programmer('ben', 29, 'JavaScript');
const carmen = new FriendlyPerson('carmen', 25);
const gonzalo = new Person('Gonzalo', 35);

const people = [ben, carmen, gonzalo];

const hostDinner = (people) => {
  people.forEach((person) => {
    console.log(person);
    person.doActivity('eating');
  })
}

hostDinner(people);


/* 
Question: Do subclass constructors need to have the
same parameteres as the superclass constructor?

Answer: No! 
*/
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, 'canine');
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, 'feline');
  }
}

const flip = new Dog('flip')
const flop = new Cat('flop')
const foo = new Animal('baba', 'bovine')

console.log(flip, flop, foo)