import { Link } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import style from "./style.css";

// import CharacterMoves from "../../components/characterMoves";
// import CharacterProfile from "../../components/characterProfile";
import CharacterStat from "../../components/characterStat";

export default function Character({ id }) {
  const [details, setDetails] = useState({ types: [{ type: { name: "" } }] });
  const [loading, setLoading] = useState(true);

  const capitalize = (name = "") => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  useEffect(async () => {
    // let response = await (
    //   await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    // ).json();
    // setDetails(response);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((r) => r.json())
      .then((r) => setDetails(r))
      .catch((err) => console.error(err))
      .finally(setLoading(false));
  }, []);

  console.log(details);

  if (loading) {
    return (
      <div class={style.info}>
        <h2>Loading...</h2>;
      </div>
    );
  }

  return (
    <div class={style.info}>
      <div class={style.rectangle}>
        <h1 class={style.heading}>{capitalize(details.name)}</h1>

        <CharacterStat
          id={details.id}
          name={details.name}
          types={details.types}
          stats={details.stats}
          sprites={details.sprites}
        />
      </div>
    </div>
  );
}