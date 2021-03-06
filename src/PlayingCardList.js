// Editted
import React from "react"
import useAxios from "./hooks/useAxios"
import PlayingCard from "./PlayingCard"
import "./PlayingCardList.css"

function PlayingCardList() {
  const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/"
  const [cards, handleClick] = useAxios(BASE_URL)

  const cardComponents = cards && cards.map(cardData => 
      (<PlayingCard key={cardData.code} front={cardData.cards[0].image} />)
    )

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => handleClick()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cardComponents}
      </div>
    </div>
  )
}

PlayingCardList.defaultProps = {}

export default PlayingCardList