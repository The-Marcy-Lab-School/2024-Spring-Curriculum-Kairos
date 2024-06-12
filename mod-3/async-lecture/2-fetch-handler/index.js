const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`fetch failed!: ${response.status}`)

    const jsonData = await response.json();
    return jsonData;
  }
  catch (error) {
    console.error(error.message);
    return null;
  }
}

const getUsersAsyncAwaitWithHelper = async () => {
  const jsonData = await fetchData('https://reqres.in/ap/users');

  // dom manipulation
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
  });

}

const main = () => {
  getUsersAsyncAwaitWithHelper()
}

main();
