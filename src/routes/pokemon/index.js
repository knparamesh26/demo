import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import style from "./style.css";
import PokemonCard from "../../components/pokemonCard";

let result = [];

const Pokemon = () => {
  const [search, setSearch] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    for (let i = 1; i <= 10; i++) {
      result[i - 1] = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      ).json();
    }
    setPokemonList(result);
    setLoading(false);
  }, []);

  useEffect(() => {
    setPokemonList(
      result.filter((pokemon) => pokemon.name.includes(search.toLowerCase()))
    );
  }, [search]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  if (loading) {
    return (
      <div class={style.pokemon}>
        <h1>Pokemon Character's</h1>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div class={style.pokemon}>
      <h1>Pokemon Character's</h1>
      <input
        class={style.search}
        type="text"
        value={search}
        onInput={handleSearch}
      />

      <div class={style.container}>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
