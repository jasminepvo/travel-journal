import React from 'react' 
import MapIcon from '../assets/icon-map.png'
import { useState } from 'react'


export default function TravelCard(props) {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <img src={props.coverImg} className='card--image' />
      <section className='card--details'>
        <div className='card--location'>
          <img src={MapIcon} className="location-icon"/>
          <span className='location-name'>{props.location.name}</span>
          <span className='location-link'><a href={props.location.link}>View on Google Maps</a></span>
        </div>
        <h1 className='card--title'>{props.title}</h1>
        <span className='card--date'>{props.dates.startDate} - {props.dates.endDate}</span>
        <p className='card--description'>{props.description}</p>
        <div className="count">
        <button onClick={() => setCount((count) => count + 1)}>Likes: {count}
        </button>
      </div>
      </section>
    </div>
  )
}