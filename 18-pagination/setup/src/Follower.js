import React from 'react'

const Follower = ({avatar_url, html_url, login}) => {
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} className='card' />
      <h4>{login}</h4>
    </article>
  )
}

export default Follower
