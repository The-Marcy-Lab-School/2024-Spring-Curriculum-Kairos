const getUsers = () => {
  const fetchPromise = fetch('https://reqres.in/api/users');

  fetchPromise
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData)

      const usersList = document.querySelector("#users-list");
      usersList.innerHTML = "";

      jsonData.data.forEach((user) => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const img = document.createElement('img');
        usersList.append(li);
        li.append(p, img);

        p.textContent = `${user.first_name} ${user.last_name}`;
        img.src = user.avatar
      })
    })
    .catch((error) => console.error(error.message));
}



// TODO: Write the same function, but using async/await
const getUsersAsyncAwait = async () => {

}

const main = () => {
  getUsers();
  getUsersAsyncAwait();
}

main();
