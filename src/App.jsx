import './App.css'
import './components/Navbar.css'
import './components/TravelCard.css'
import Navbar from './components/Navbar'
import TravelCard from './components/TravelCard'
import Data from './Data'

function App() {

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
    </div>
  )
}

export default App
