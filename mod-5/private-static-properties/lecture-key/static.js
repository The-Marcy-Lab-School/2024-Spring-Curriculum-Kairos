class User {
  #password;

  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.#password = null;
    this.isAdmin = false; // Default value for isAdmin
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }

  validatePassword(passwordToCheck) {
    if (!this.#password) {
      console.log('No password set.');
      return false;
    }
    if (passwordToCheck === this.#password) {
      console.log('It matches!');
      return true;
    }
    console.log('Wrong password!');
    return false;
  }

  // Static method to make a user an admin
  static makeAdmin(user) {
    user.isAdmin = true;
    console.log(`${user.name} is now an admin.`);
  }
}

const ben = new User('ben', 'ben@mail.com');
ben.validatePassword('1234'); // No password set.
ben.setPassword('1234');
ben.validatePassword('1234'); // It Matches!

console.log(ben.isAdmin); // false
User.makeAdmin(ben);
console.log(ben.isAdmin); // true
