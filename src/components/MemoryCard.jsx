import React from 'react'
import './MemoryCard.css'


function MemoryCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
      if(!disabled){
        handleChoice(card)
      }
      
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped":""}>
              <img className="front" src={card.src} alt="card front" height="160px" weight="50px"/>
              <img className="back" src="/images/formula1.png" onClick={handleClick} alt="card back"/>
            </div>
          </div>
    )
}

export default MemoryCard;