// class syntax; notice there is no parameters
class Quadrilateral {
  //constructor function
  constructor(s1,s2,s3,s4){
    // these are instance properties
    this.s1 = s1;
    this.s2 = s2; 
    this.s3 = s3; 
    this.s4 = s4;
  }
  //this is an instance method
  perimeter(){
    return this.s1 + this.s2 + this.s3 + this.s4
  }
}

class Rectangle extends Quadrilateral {
  //constructor function
  constructor(s1,s2){
    // super will reference the constructor function of the parent class/superclass
    // the values passed into the super function will sub for the values in the constructor
    super(s1,s2,s1,s2);
  }

  area(){
    return this.s1 * this.s2;
  }

  getDiagonal(){
    const diagonal = this.s1 ** 2 + this.s2 ** 2
    return Math.sqrt(diagonal)
  }

  perimeter(){
    console.log("this is a perimeter method in the rectangle class!");
    return this.s1 * 2 + this.s2 * 2
  }
}

class Square extends Rectangle {
  //constructor function
  constructor(s1){
    super(s1,s1);
  }
  perimeter(){
    console.log("this is a perimeter method in the square class!");
    return this.s1 * 4
  }
}
// When we use the new keyword we are creating an instance of a class in reference to the constructor function.
const trapezoid = new Quadrilateral(2,4,5,7)

const rectangle1 = new Rectangle(2,4);

const sqaure1 = new Square(2);

console.log(trapezoid.perimeter());
console.log(rectangle1.perimeter());
console.log(sqaure1.perimeter());

// console.log(rectangle1.area())
// console.log(sqaure1.area())

// console.log(rectangle1.getDiagonal()); // 4.?
// console.log(sqaure1.getDiagonal()); // 2.?

// Example of a closure
// outer function, arr and num are parameters of the outer function
const closureFuncExample = (arr,num) => {
  // inner function -> .map() callback function
  const num1 = 3
  return arr.map(currVal => {
    // reference a value of an outer function
    return currVal * num * num1; 
  })
}

// console.log(closureFuncExample([1,2,3,4], 4))

// A closure is created when an inner function references an outer functions parameter or variable

/**
 * Polymorphism: 
 * The methods have the same name but different implementation
 * It is directly associated with inheritance
 */