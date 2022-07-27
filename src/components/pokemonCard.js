import { h } from "preact";
import style from "./pokemonCard.css";
import { Link } from "preact-router";
import typesColor from "../utils/typesColor";

export default function PokemonCard({ pokemon }) {
  const redirectURL = `/pokemon/character/${pokemon.id}`;

  const bgcolor =
    pokemon.types.length == 1
      ? {
          backgroundColor: typesColor[pokemon.types[0].type.name],
        }
      : {
          backgroundImage: `linear-gradient(135deg, ${
            typesColor[pokemon.types[0].type.name]
          } 50%, ${typesColor[pokemon.types[1].type.name]} 50%)`,
        };

  return (
    <div class={style.wrap}>
      <Link class={style.container} href={redirectURL}>
        <div class={style.character} style={bgcolor}>
          <img
            class={style.icon}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <span class={style.name}>{pokemon.name}</span>
        </div>
      </Link>
    </div>
  );
}
