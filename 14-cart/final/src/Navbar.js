import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'

const Nav = () => {
  const { amount } = useGlobalContext()
  return (
    <menu>
      <nav>
        <div className='nav-center'>
          <Link to='/' className='link'>
            <h3 className='logo'>Logo</h3>
          </Link>

          <div className='nav-container'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
            </svg>
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div>
            
          </div>
        </div>
        <ul>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
          <li>
            <Link to='/product'>Shop</Link>
          </li>
          <li>
            <Link to='/auth'>Account</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
        </ul>
      </nav>
    </menu>
  )
}

export default Nav
