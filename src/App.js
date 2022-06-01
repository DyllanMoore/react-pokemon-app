import './App.css';
import { useState } from "react";
import Axios from "axios";
import { DisplayPokemon } from './components/displayPokemon';

function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: ""
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) =>
      setPokemon({
        name: pokemonName,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name
      })
    )
    setPokemonChosen(true);
  };


  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon Stats</h1>
        <input type="text" onChange={(event) => {
          setPokemonName(event.target.value);
        }}
        />
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <div className="displaySection">
        {!pokemonChosen ? (
          <h1>Please choose a pokemon</h1>
        ) : (
          <DisplayPokemon
            name={pokemonName}
            img={pokemon.img}
            species={pokemon.species}
            hp={pokemon.hp}
            attack={pokemon.attack}
            defense={pokemon.defense}
            type={pokemon.type}
          />
        )}

      </div>
    </div>
  );
}

export default App;
