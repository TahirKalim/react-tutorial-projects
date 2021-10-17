import React from 'react'
import './Home.css'

import cardData from '../../components/Card/cardData'
import Card from '../../components/Card/Card'
import Slide from '../../components/Slideshow/Slide'
const Home = () => {
  return (
    <div className='container'>
      <div className='filler'></div>
      <div className='freeShipping'>
        <p>Free Shipping on all orders</p>
        <span>Ends in 2 days</span>
      </div>
      <div className='filler'></div>
      <Card cardData={cardData[0]} />
      <div className='filler'></div>
      <Card cardData={cardData[1]} />
      <div className='filler'></div>
      <Card cardData={cardData[2]} />
      <Slide />
      <div className='filler'></div>
    </div>
  )
}

export default Home
