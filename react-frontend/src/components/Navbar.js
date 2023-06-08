import { Link } from 'react-router-dom';
import React from 'react'
import Home from './Home';
import Users from './Users';
import Exercises from './Exercises';

export default function Navbar() {
  return (
    <nav>
        <Link  to='/' element={<Home/>}>Home</Link>
        <Link to='exercises' element={<Exercises />}>Exercises</Link>
        <Link to='users' element={<Users/>} >Users</Link>

    </nav>
  )
}
