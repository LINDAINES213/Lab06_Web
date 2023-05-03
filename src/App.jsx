import { useEffect, useState } from 'react'
import './App.css'
import MemoryCard from './components/MemoryCard'

const imagenes = [
  {"src" : "/images/carlos.jpeg", matched: false},
  {"src" : "/images/checo.jpeg", matched: false},
  {"src" : "/images/hamilton.jpeg", matched: false},
  {"src" : "/images/lando.jpeg", matched: false},
  {"src" : "/images/leclerc.jpeg", matched: false},
  {"src" : "/images/ricciardo.jpeg", matched: false},
  {"src" : "/images/sargeant.jpeg", matched: false},
  {"src" : "/images/verstappen.jpeg", matched: false}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const[choiceOne, setChoiceOne] = useState(null)
  const[choiceTwo, setChoiceTwo] = useState(null)
  const[disabled, setDisabled] = useState(false)
  const [matchedPairs, setMatchedPairs] = useState(0)

  const shuffleCards = () => {
    const shuffledCards = [...imagenes, ...imagenes]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
    setMatchedPairs(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    if(choiceOne && choiceTwo) {
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          const newCards = prevCards.map(card => {
            if(card.src === choiceOne.src){
              return {...card, matched: true}
            } else {
              return card
            }
          }) 
          const matched = newCards.filter(card => card.matched).length
          if(matched === 16) {
            setMatchedPairs(matched)
          }
          return newCards
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Juego de Memoria F1</h1>
      <h2>Turnos: {turns}</h2>
      <button onClick={shuffleCards}>Nuevo Juego</button>
      {matchedPairs === 16 && <h4>¡FELICITACIONES, GANASTE 🏆!</h4>}
      <div className="card-grid">
        {cards.map(card => (
          <MemoryCard 
          key={card.id} 
          card={card}
          handleChoice={handleChoice}
          flipped = {card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
      /> 
        ))}
      </div>
    </div>
  );
}

export default App
