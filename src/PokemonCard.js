// Ediitted
import React from "react"
import useFlip from "./hooks/useFlip"
import "./PokemonCard.css"

function PokemonCard({ front, back, name, stats }) {
  const [isFacingUp, flip] = useFlip()

  const cardFrontComponent = (
    <div className="PokemonCard-front">
      <img src={front} alt={`{name} front`} />
      <div>
        <p className="PokemonCard-name">{name}</p>
        <ul className="PokemonCard-stats">
          {stats && stats.map(stat => (
            <li key={stat.name}>
              <em>{stat.name}</em>: {stat.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  const cardBackComponent = (
    <div className="PokemonCard-back">
      <img src={back} alt={`{name} back`} />
    </div>
  )

  return (
    <div onClick={flip} className="PokemonCard Card">
      {isFacingUp ? cardFrontComponent : cardBackComponent}
    </div>
  )
}

export default PokemonCard