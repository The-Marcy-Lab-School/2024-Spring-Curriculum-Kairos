console.log("hello");
let headingText = "Main Heading"

const renderHeading = (e) => {
  e.preventDefault()
  const userHeading = e.target.heading.value;
  console.log(userHeading);
  const h1 = document.createElement('h1'); 

  h1.textContent = `${userHeading}`;

  document.body.append(h1);
  e.target.reset()
}

const renderPokemon = (data) => {
  const ul = document.createElement('ul');
  data.forEach(pokemon => {
    const li = document.createElement('li'); 
    li.textContent = pokemon.name;
    li.dataset.pokemonUrl = pokemon.url;
    console.log(li)
    ul.append(li);
  })
  document.body.append(ul);
}

const fetchPokemon = async (e) => {
  try{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await res.json();

    console.log(data.results);
    renderPokemon(data.results)

  } catch (err){
    console.log(err)
  }
}

//runner function 
const main = () => {
  // renderHeading(headingText);
  // attach a eventListener
  // what is the fetch call we are making? 
  // after we have our data, how are we going to display it? 
  const headingButton = document.querySelector("#get-pokemon");
  headingButton.addEventListener("click", fetchPokemon);

  const headingForm = document.querySelector("#heading-form");
  headingForm.addEventListener('submit', renderHeading);

}

main();