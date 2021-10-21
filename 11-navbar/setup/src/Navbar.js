import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
// important thing is to note that first we hard coded the social media link and the nav bar then we removed and used map to iterate over.
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container show-container'>
          <ul className='links'>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          <li>
            <a href='https://twitter.com'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='https://twitter.com'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='https://twitter.com'>
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
