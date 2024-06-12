// plan out the logic:

// When the page loads:

// fetch pikachu (make sure to catch any errors)
// render pikachu data to the screen
// add an event listener for the form
// When the form is submitted:

// grab data from the form
// use that data to fetch a new pokemon (make sure to catch any errors)
// render that pokemon to the screen

const fetchPokemon = (value) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`)
  .then((res) => {
    console.log(res);
    if(!res.ok){
      console.log(new Error("Check the URL!"))
      return new Error("Check the URL!")
    }
    return res.json()
  })
  .then(data => {
    console.log(data, data.name, data.sprites.front_default);
    document.getElementById("found-pokemon").textContent = data.name;
    document.getElementById("pokemon-img").src = data.sprites.front_default
  })
  .catch(err => {
    console.log(new Error(err));
  });

}

const handleSubmission = (e) => {
  e.preventDefault();
  const newPokemon = e.target.pokemonName.value;
  fetchPokemon(newPokemon)
  
}

const main = () => {
  fetchPokemon("pikachu")
  const searchForm = document.getElementById("poke-search-form")
  searchForm.addEventListener('submit', handleSubmission);
};

main();