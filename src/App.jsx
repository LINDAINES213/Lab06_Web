import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const images = [
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

  //shuffle cards

  

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button>New Game</button>
    </div>
  )
}

export default App
