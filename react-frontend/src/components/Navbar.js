import { Link } from 'react-router-dom';
import React from 'react'
import Home from './Home';
import Users from './Users';
import Exercises from './Exercises';

export default function Navbar() {
  return (
    <div className='container'>
    <nav className='navbar'>
      <div className='container-fluid'>
        <div className='nav-header'>
          <Link className='navbar-contents' to='' element={<Home/>}>FIT & FULL</Link>
        </div>
        <Link  className='navbar-contents' to='/' element={<Home/>}>Home</Link>
        <Link className='navbar-contents' to='exercises' element={<Exercises />}>Exercises</Link>
        <Link className='navbar-contents' to='users' element={<Users/>} >Users</Link>
      </div>
    </nav>
    </div>
  )
}
