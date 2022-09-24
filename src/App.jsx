import { useState } from 'react'
import './App.css'
import './components/Navbar.css'
import Navbar from './components/Navbar'
import TravelCard from './components/TravelCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar className="Navbar"/>
      <TravelCard />

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Give Likes {count}
        </button>
      </div> */}

    </div>
  )
}

export default App
