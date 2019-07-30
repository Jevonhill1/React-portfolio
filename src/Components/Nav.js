import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


const Navigation = () => {
  return (
    <nav>
      <div id='navlist' className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/search/'>Search</Link>
      </div>
    </nav>
  )
}



export default Navigation

