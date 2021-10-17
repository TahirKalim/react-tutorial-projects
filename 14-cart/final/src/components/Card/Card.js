import React from 'react'
import ShopBtn from '../shopBtn/ShopBtn'

import './Card.css'

const Card = ({ cardData }) => {
  return (
    <div className='cardWrapper'>
      <img className='cardImage' src={cardData.image} alt='card' />
      <div className='desc'>
        <h2 className='title'>{cardData.title}</h2>
        <p className='subtitle'>{cardData.subtitle}</p>
        <ShopBtn />
      </div>
    </div>
  )
}

export default Card
