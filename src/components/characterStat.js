import { Fragment } from "preact";
import { useEffect } from "preact/hooks";
import typesColor from "../utils/typesColor";
import style from "./characterStat.css";

export default function CharacterStat({
  id,
  name,
  types,
  stats,
  sprites = {},
}) {
  return (
    <div class={style.characterStat}>
      <div class={style.commonProfile}>
        <img
          class={style.characterIcon}
          src={sprites.front_default}
          alt={name}
        />
        <div class={style.commonInfo}>
          {/* <span>{id}</span> */}
          <div class={style.types}>
            {types &&
              types.map((object, index) => (
                <span key={index} class={style.box}>
                  {object.type.name}
                </span>
              ))}
          </div>

          {stats &&
            stats.map((obj) => (
              <Fragment key={obj.id}>
                <li class={style.stats}>
                  <span class={style.stat}>
                    <strong>{obj.stat.name}</strong>
                  </span>
                  <div class={style.progress}>
                    <div
                      class={style.progressBar}
                      style="width: {{object.base_stat}}px"
                    >
                      {obj.base_stat}%
                    </div>
                  </div>
                </li>
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
