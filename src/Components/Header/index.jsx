import React from 'react'
import {AiFillBug} from 'react-icons/ai'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='wrapper-header'>
        <div className='wrapper-logo'>
            <AiFillBug size={32} color='skyblue'/> Sky Bug
        </div>
        <nav className='wrapper-nav'>
            <ul className='list-nav'>
                <li className='nav-item'>
                    <NavLink to={'/'}>Dashboard</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to={'/shop'}>Shop</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header