import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemoryCard from './components/MemoryCard'

const imagenes = [
  {"src" : "/images/carlos.jpg"},
  {"src" : "/images/checo.jpg"},
  {"src" : "/images/hamilton.jpg"},
  {"src" : "/images/lando.jpg"},
  {"src" : "/images/leclerc.jpg"},
  {"src" : "/images/ricciardo.jpg"},
  {"src" : "/images/sargeant.jpg"},
  {"src" : "/images/verstappen.jpg"}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const[choiceOne, setChoiceOne] = useState(null)
  const[choiceTwo, setChoiceTwo] = useState(null)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...imagenes, ...imagenes]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <MemoryCard 
          key={card.id} 
          card={card}
          handleChoice={handleChoice}/> 
        ))}
      </div>
    </div>
  );
}

export default App
