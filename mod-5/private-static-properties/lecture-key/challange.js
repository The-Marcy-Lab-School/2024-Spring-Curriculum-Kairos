class Car {
  #licensePlate; // Private property

  constructor(make, model, year) {
    // Public properties
    this.make = make;
    this.model = model;
    this.year = year;
    // Generate a random license plate as the private property
    this.#licensePlate = Car.generateLicensePlate();
  }

  // Instance method 1: Display information about the car
  displayInfo() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, License Plate: ${this.#licensePlate}`);
  }

  // Instance method 2: Honk the car's horn
  honkHorn() {
    console.log('Honk! Honk!');
  }

  // Static method: Generate a random license plate
  static generateLicensePlate() {
    return 'ABC123';
  }
}

// Example usage:
const myCar = new Car('Toyota', 'Camry', 2022);
myCar.displayInfo(); // Should display car information
myCar.honkHorn(); // Should print 'Honk! Honk!'

const LicensePlate = Car.generateLicensePlate();
console.log(`Random License Plate: ${randomLicensePlate}`);


