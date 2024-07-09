// factory function - returns an object
const makeFriendsManager = () => {
  // encapsulation: we don't want this array accessible outside
  // of the manager. We take advantage of closure to make this private
  const friends = [];

  return {
    addFriend(friend) {
      friends.push(friend);
    },
    getFriends() {
      return [...friends]; // returning a copy because of pass by reference
    }
  }
}

// TODO: Make a FriendsManager class with a non-private friends property
// and addFriend and getFriends as methods

// this is the current object
// in a constructor, this is the new object being made
// in a method, this is the object that is calling the method

class FriendsManager {
  #friends = []; // private instance property

  constructor(owner) {
    this.owner = owner; // public instance property
    // this.friends = [];
  }
  addFriend(friend) {
    this.#friends.push(friend);
  }
  getFriends() {
    return [...this.#friends]; // returning a copy because of pass by reference
  }
}

const myFriends = new FriendsManager('ben');
const yourFriends = new FriendsManager('gonzalo');
yourFriends.addFriend('zo')

// console.log(yourFriends);
// console.log(yourFriends.getFriends());

myFriends.addFriend('carmen')
// console.log(myFriends);
// console.log(myFriends.getFriends());


/* 
public vs. private 
static (class) vs. instance
*/
class User {
  #password; // private instance property  
  static #allUsers = [] // private class property

  constructor(name, email, password) {
    // public instance properties
    this.name = name;
    this.email = email;
    // modify the private instance property
    this.#password = password;

    User.#allUsers.push(this);
  }
  static getAllUsers() { // public class method
    return User.#allUsers
  }
  validatePassword(passwordToCheck) {
    // return true if passwordToCheck matches private password
    console.log(this.password);
    console.log(this.#password);
    return passwordToCheck === this.#password;
  }
  setPassword(newPassword) {
    this.#password = newPassword
  }
}

const ben = new User('ben', 'ben@mail.com', 123);
const carmen = new User('carmen', 'carmen@mail.com', 456);
const zo = new User('zo', 'zo@mail.com', 789);


console.log(User.allUsers);
console.log(User.getAllUsers());
// console.log(ben);
// console.log(isValid);

