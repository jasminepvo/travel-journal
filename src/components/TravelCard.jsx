import React from 'react' 
import MapIcon from '../assets/icon-map.png'

export default function TravelCard(props) {
  return (
    <div className='card'>
      <img src="https://images.unsplash.com/photo-1510097467424-192d713fd8b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80" className='card--image' />
      <section className='card--details'>
        <div className='card--location'>
          <img src={MapIcon} className="location-icon"/>
          <span className='location-name'>J A P A N</span>
          <span className='location-link'><a href="">View on Google Maps</a></span>
        </div>
        <h1 className='card--title'>Mount Fuji</h1>
        <span className='card--date'>date</span>
        <p className='card--description'>description</p>
      </section>
    </div>
  )
}