/* 
* 
* This is good but it could be better. Let's add
* Lets see what happens if we try to access the password property.
* 
*/
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.password = null;
  }

  setPassword(newPassword) {
    this.password = newPassword;
  }

  validatePassword(passwordToCheck) {
    if (!this.password) {
      console.log('No password set.');
      return false;
    }
    if (passwordToCheck === this.password) {
      console.log('It matches!');
      return true;
    }
    console.log('Wrong password!');
    return false;
  }
}

const ben = new User('ben', 'ben@mail.com');
ben.validatePassword('1234'); // No password set.
ben.setPassword('1234');
ben.validatePassword('1234'); // It Matches!
ben.password = '1212';
ben.validatePassword('1234');
ben.validatePassword('1212');


