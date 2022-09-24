import { useState } from 'react'
import './App.css'
import './components/Navbar.css'
import Navbar from './components/Navbar'
import TravelCard from './components/TravelCard'
import Data from './Data'

function App() {
  const [count, setCount] = useState(0)

  const cards = Data.map(card => {
    return (
      <TravelCard
        key={card.id}
        {...card}
      />
    )
  })

  return (
    <div className="App">
      <Navbar className="Navbar"/>
      <section className='cards-list'>
        {cards}
      </section>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Give Likes {count}
        </button>
      </div> */}

    </div>
  )
}

export default App
