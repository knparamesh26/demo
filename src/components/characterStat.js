import { Fragment } from "preact";
import { useEffect } from "preact/hooks";
import typesColor from "../utils/typesColor";

export default function CharacterStat({
  id,
  name,
  types,
  stats,
  sprites = {},
}) {

  const percentage = (obj) => {
    return {width: `${obj.base_stat}%`}
  }
  return (
      <div class='d-lg-flex' style='background-color: aqua'>
        <div class='text-center'>
          <img
            class='p-3'
            style='width: 16rem'
            src={sprites.front_default}
            alt={name}
          />
        </div>
        <div class='flex-grow-1'>
          <div class='p-1 m-2 text-center'>
          <span>#{id}</span>
            {types &&
              types.map((object, index) => (
                <span key={index} class='border border-2 mx-2 bg-success p-1'>
                  {object.type.name}
                </span>
              ))}
          </div>

          <div class='container w-75'>
            {stats &&
            stats.map((obj) => (
              <Fragment key={obj.id}>
                <li class='d-flex'>
                  <span class='flex-grow-1 w-50 mb-2'>
                    <strong>{obj.stat.name}</strong>
                  </span>
                  <div class='flex-grow-1 w-50 progress'>
                    <div
                      class='progress-bar bg-info'
                      style={percentage(obj)}
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
