import React from 'react'
import './MemoryCard.css'


function MemoryCard({ card, handleChoice }) {

    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className="card">
            <div>
              <img className="front" src={card.src} alt="card front"/>
              <img className="back" 
              src="/images/formula1.png" 
              onClick={handleClick} 
              alt="card back"/>
            </div>
          </div>
    )
}

export default MemoryCard;