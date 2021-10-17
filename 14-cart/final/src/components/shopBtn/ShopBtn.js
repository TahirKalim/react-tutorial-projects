import React from 'react'
import { Link } from 'react-router-dom'
import './ShopBtn.css'
const ShopBtn = () => {
  return (
    <>
      <Link to='/product'>
        <button className='shopCta'>Shop Now</button>
      </Link>
    </>
  )
}

export default ShopBtn
