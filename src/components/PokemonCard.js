import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { name, hp, sprites } = pokemon;

  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle((toggle) => !toggle)
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          {toggle ?
          <img src={sprites.back}
          alt={name} /> : <img src={sprites.front}
          alt={name} />}
        </div>
        <div className="content">
          <div className="header">{name.toUpperCase()}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
