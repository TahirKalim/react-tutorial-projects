import React, { useState } from 'react'

const Tour = ({ id, image, info, price, name }) => {
  return (
    <article>
      <img src={image} alt={name} width='200' length='200' />
      <div>
        <h4>{name}</h4>
        <p>{info}</p>
      </div>
    </article>
  )
}
export default Tour
